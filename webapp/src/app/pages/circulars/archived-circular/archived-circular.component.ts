import { Component } from '@angular/core';
import { NoticeService } from '../../../services/notice.service';
import { NoticeCardComponent } from '../notice-card/notice-card.component';

@Component({
  selector: 'app-archived-circular',
  standalone: true,
  imports: [NoticeCardComponent],
  templateUrl: './archived-circular.component.html',
  styleUrl: './archived-circular.component.css'
})
export class ArchivedCircularComponent {
  archivedNotices: any[] = [];
  constructor(private service: NoticeService) {}

  ngOnInit() {
      this.service.getArchivedNotices();
      this.service.archivedNotices$.subscribe((notices) => {
      this.archivedNotices = notices;
    });
  }

}
