import { Component } from '@angular/core';
import { BuildingComponent } from './building/building.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OffBearerComponent } from './off-bearer/off-bearer.component';
import { CopyrightBarComponent } from './copyright-bar/copyright-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    BuildingComponent,
    AboutComponent,
    ContactComponent,
    OffBearerComponent,
    CopyrightBarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  scrollToElement($element: HTMLElement): void {
    console.log($element);
    $element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
