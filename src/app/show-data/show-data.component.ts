import { Component, ViewEncapsulation } from '@angular/core';
import { Box1Component } from './box-1/box-1.component';
import { Box2Component } from './box-2/box-2.component';
import { Box3Component } from './box-3/box-3.component';
import { Box4Component } from './box-4/box-4.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-show-data',
  standalone: true,
  imports: [
    Box1Component,
    Box2Component,
    Box3Component,
    Box4Component,
    RouterModule,
  ],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.scss',
})
export class ShowDataComponent {}
