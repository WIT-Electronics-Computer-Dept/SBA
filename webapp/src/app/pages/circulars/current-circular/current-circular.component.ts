import { Component } from '@angular/core';
import { NoticeCardComponent } from '../notice-card/notice-card.component';
import { ApisService } from '../../../services/apis.service';

@Component({
  selector: 'app-current-circular',
  standalone: true,
  imports: [NoticeCardComponent],
  providers:[ApisService],
  templateUrl: './current-circular.component.html',
  styleUrl: './current-circular.component.css'
})
export class CurrentCircularComponent {
  currentNotices: any[] = [];
  constructor(private service: ApisService) {}

  ngOnInit() {
      this.service.getCurrentNotices();
      //@TO-DO: destroy observable to avoid memory leak in ngOnDestroy()
      this.service.currentNotices$.subscribe((notices) => {
      this.currentNotices = notices;
    });
  }

}
