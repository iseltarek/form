import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FormComponent } from '../form/form.component';
import { TitleComponent } from '../title/title.component';
import { AppComponent } from '../app.component';
import { ShowDataComponent } from '../show-data/show-data.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FormComponent,
    TitleComponent,
    AppComponent,
    ShowDataComponent,
    RouterOutlet,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {
  active = true;
}
