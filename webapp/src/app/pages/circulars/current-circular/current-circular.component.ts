import { Component } from '@angular/core';
import { NoticeCardComponent } from '../notice-card/notice-card.component';
import { NoticeService } from '../../../services/notice.service';

@Component({
  selector: 'app-current-circular',
  standalone: true,
  imports: [NoticeCardComponent],
  templateUrl: './current-circular.component.html',
  styleUrl: './current-circular.component.css'
})
export class CurrentCircularComponent {
  currentNotices: any[] = [];
  constructor(private service: NoticeService) {}

  ngOnInit() {
      this.service.getCurrentNotices();
      this.service.currentNotices$.subscribe((notices) => {
      this.currentNotices = notices;
    });
  }

}
