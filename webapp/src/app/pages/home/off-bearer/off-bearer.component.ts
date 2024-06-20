import { Component } from '@angular/core';
import { BearerComponent } from './bearer/bearer.component';

@Component({
  selector: 'app-off-bearer',
  standalone: true,
  imports: [BearerComponent],
  templateUrl: './off-bearer.component.html',
  styleUrl: './off-bearer.component.css'
})
export class OffBearerComponent {

}
