import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notice-card',
  standalone: true,
  imports: [],
  templateUrl: './notice-card.component.html',
  styleUrl: './notice-card.component.css'
})
export class NoticeCardComponent {
  @Input() entry: any;

}
