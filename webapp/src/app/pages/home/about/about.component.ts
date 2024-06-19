import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  address: string[] = [
    'Near Rangbhavan Chowk, Dist-Solapur-413003',
    'State-Maharashtra',
  ];
  about: string[] = [
    `The Solapur Bar Association is a prominent organization in Solapur
     District, dedicated to advocating for the welfare of advocates. It
     safeguards their rights, upholds legal ethics, and fosters professional development.`,
    `The association conducts legal aid camps, awareness programs, and
      educational workshops for the public and members. It plays a vital role in
      promoting legal education and community service while fostering unity
      among advocates.`,
    `The Solapur Bar Association stands as a symbol of legal excellence,
      ensuring fair treatment and contributing to the overall growth of the
      legal fraternity in the region.`,
  ];
}
