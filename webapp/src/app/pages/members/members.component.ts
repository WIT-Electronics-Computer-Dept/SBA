import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchComponent } from '../../shared-components/search/search.component';
import { MemberService } from '../../services/member.service';
import { AlphaSortComponent } from '../../shared-components/alpha-sort/alpha-sort.component';
import { MemberCardComponent } from './member-card/member-card.component';
import { PageTitleComponent } from '../../shared-components/page-title/page-title.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    SearchComponent,
    AlphaSortComponent,
    MemberCardComponent,
    PageTitleComponent,
  ],
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'], // Corrected here
})
export class MembersComponent implements OnInit, OnDestroy {
  members: any[] = [];
  private destroy$ = new Subject<void>();

  constructor(private service: MemberService) {}

  ngOnInit() {
    this.service.getMembers();
    this.service.members$
      .pipe(takeUntil(this.destroy$))
      .subscribe((members) => {
        this.members = members;
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
