import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  address:string[]=["Near Rangbhavan Chowk, Dist-Solapur-413003 ", "State-Maharashtra."];
}
