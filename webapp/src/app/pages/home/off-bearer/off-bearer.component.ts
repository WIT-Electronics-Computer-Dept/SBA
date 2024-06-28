import { Component } from '@angular/core';
import { BearerComponent } from './bearer/bearer.component';
import { Bearer } from '../bearer';
import { Bearers } from './office-bearers';


@Component({
  selector: 'app-off-bearer',
  standalone: true,
  imports: [BearerComponent],
  templateUrl: './off-bearer.component.html',
  styleUrl: './off-bearer.component.css'
})
export class OffBearerComponent {

  bearers!:Bearer[];

  ngOnInit(){
    this.bearers= Bearers;
  }
}
