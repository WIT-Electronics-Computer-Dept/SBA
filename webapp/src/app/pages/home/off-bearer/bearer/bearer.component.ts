import { Component } from '@angular/core';
import { Bearer } from '../../bearer';

@Component({
  selector: 'app-bearer',
  standalone: true,
  imports: [],
  templateUrl: './bearer.component.html',
  styleUrl: './bearer.component.css',
})
export class BearerComponent {
  bearer: Bearer = {
    id: '112',
    post: 'Chairman',
    photo: '/img/avatar.png',
    salutation: 'Mr.',
    name: 'Abhijit Vijaykumar Mophare',
    education: 'M.A. L.L.B.',
    exp: '20',
  };
}
