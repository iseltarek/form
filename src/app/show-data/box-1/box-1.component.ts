import { Component, OnInit, signal } from '@angular/core';
import { type data } from '../../form/form.model';
import { DataService } from '../../form/data.service';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-box-1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './box-1.component.html',
  styleUrl: './box-1.component.scss',
})
export class Box1Component implements OnInit {
  Data!: any;

  loadData() {
    this.dataService.getData().subscribe((res) => {
      this.Data = res.data;
    });
  }
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.loadData();
  }
}
