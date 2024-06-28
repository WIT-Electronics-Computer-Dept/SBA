import { Component } from '@angular/core';
import { ApisService } from '../../../services/apis.service';
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
  constructor(private service: ApisService) {}

  ngOnInit() {
      this.service.getArchivedNotices();
      //@TO-DO: destroy observable to avoid memory leak in ngOnDestroy()
      this.service.archivedNotices$.subscribe((notices) => {
      this.archivedNotices = notices;
    });
  }

}
