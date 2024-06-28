import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { PageTitleComponent } from '../../shared-components/page-title/page-title.component';
import { NoticeCardComponent } from './notice-card/notice-card.component';

@Component({
  selector: 'app-circulars',
  standalone: true,
  imports: [
    NoticeCardComponent,
    PageTitleComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgClass,
  ],
  templateUrl: './circulars.component.html',
  styleUrl: './circulars.component.css',
})
export class CircularsComponent {
  isCurrentSelected:boolean=true;

  onClick(){
    this.isCurrentSelected=!this.isCurrentSelected;
  }

}
