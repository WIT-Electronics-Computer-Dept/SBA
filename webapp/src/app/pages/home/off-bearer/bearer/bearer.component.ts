import { Component, Input } from '@angular/core';
import { Bearer } from '../../bearer';

@Component({
  selector: 'app-bearer',
  standalone: true,
  imports: [],
  templateUrl: './bearer.component.html',
  styleUrl: './bearer.component.css',
})
export class BearerComponent {
  @Input() bearer: Bearer = {
    id: 'test',
    post: 'test',
    photo: '/img/avatar.png',
    salutation: 'Mr.',
    name: 'Abhijit Vijaykumar Mophare',
    education: 'Test',
    exp: '20',
  };
}
