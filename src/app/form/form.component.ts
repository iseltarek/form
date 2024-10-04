import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from './data.service';
import { Router, RouterLinkActive, RouterModule } from '@angular/router';
import { data } from './form.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  imports: [FormsModule, RouterLinkActive, RouterModule],
})
export class FormComponent {
  constructor(private dataService: DataService, private router: Router) {}

  onSubmit(formdata: NgForm) {
    console.log(formdata.value);

    if (!formdata || !formdata.valid) {
      return;
    }

    const Data: data = {
      name: formdata.form.value.name,
      address: formdata.form.value.address,
      birthday: formdata.form.value.year,
      school: formdata.form.value.school,
      id: Math.floor(Math.random() * 9000 + 1000).toString(),
      age: this.calcAge(formdata.form.value.year),
      status: 'طبيعي',
      phone: 109438723,
    };

    this.dataService.addUserData(Data).subscribe((res) => {
      console.log('User data added:', res);
      this.router.navigate(['/data']);
    });

    formdata.reset();
  }

  calcAge(birthYear: number): number {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }
}
