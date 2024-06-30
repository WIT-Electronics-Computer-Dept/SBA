import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { takeUntil, shareReplay } from 'rxjs/operators';
import { GroupByService } from './group-by.service';

@Injectable({
  providedIn: 'root'
})
export class ApisService implements OnDestroy {

  private noticeURL = 'http://localhost:3000/notices';

  private destroy$ = new Subject<void>();

  private currentNoticesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public currentNotices$: Observable<any[]> = this.currentNoticesSubject.asObservable();

  private archivedNoticesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public archivedNotices$: Observable<any[]> = this.archivedNoticesSubject.asObservable();

  private notices$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor(
    private http: HttpClient,
    private groupByService: GroupByService
  ) {
    this.loadCachedNotices();
  }

  private loadCachedNotices(): void {
    const cachedNotices = localStorage.getItem('notices');
    if (cachedNotices) {
      const data = JSON.parse(cachedNotices);
      this.notices$.next(data);
      const groupedData = this.groupByService.groupBy(data, 'status');
      this.currentNoticesSubject.next(groupedData['current'] || []);
      this.archivedNoticesSubject.next(groupedData['archived'] || []);
    } else {
      this.fetchNotices();
    }
  }

  private fetchNotices(): void {
    this.http.get<any[]>(this.noticeURL)
      .pipe(
        shareReplay(1),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => {
        localStorage.setItem('notices', JSON.stringify(data));
        this.notices$.next(data);
        const groupedData = this.groupByService.groupBy(data, 'status');
        this.currentNoticesSubject.next(groupedData['current'] || []);
        this.archivedNoticesSubject.next(groupedData['archived'] || []);
      });
  }

  getCurrentNotices(): void {
    this.notices$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        const groupedData = this.groupByService.groupBy(data, 'status');
        this.currentNoticesSubject.next(groupedData['current'] || []);
      });
  }

  getArchivedNotices(): void {
    this.notices$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        const groupedData = this.groupByService.groupBy(data, 'status');
        this.archivedNoticesSubject.next(groupedData['archived'] || []);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
