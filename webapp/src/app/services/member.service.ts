import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { takeUntil, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MemberService implements OnDestroy {

  private memberURL = 'http://localhost:3000/members';
  private destroy$ = new Subject<void>();

  private membersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public members$: Observable<any[]> = this.membersSubject.asObservable();

  private memberReplaySubject$: ReplaySubject<any[]> = new ReplaySubject(1);

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCachedMembers();
    } else {
      // Only fetch members once during SSR
      this.fetchMembers();
    }
  }

  private loadCachedMembers(): void {
    const cachedMembers = localStorage.getItem('members');
    if (cachedMembers) {
      const data = JSON.parse(cachedMembers);
      this.memberReplaySubject$.next(data);
      this.membersSubject.next(data);
    } else {
      this.fetchMembers();
    }
  }

  private fetchMembers(): void {
    this.http.get<any[]>(this.memberURL)
      .pipe(
        shareReplay(1),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('members', JSON.stringify(data));
        }
        this.memberReplaySubject$.next(data);
        this.membersSubject.next(data);
      });
  }

  getMembers(): void {
    this.memberReplaySubject$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.membersSubject.next(data);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}













/*import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, OnDestroy, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { takeUntil, shareReplay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MemberService implements OnDestroy {

  private memberURL = 'http://localhost:3000/members';
  private destroy$ = new Subject<void>();
  private membersSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);
  public members$: Observable<any[]> = this.membersSubject.asObservable();
  private memberReplaySubject$: ReplaySubject<any[]> = new ReplaySubject(1);


  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.loadCachedMembers();
    } else {
      this.fetchMembers();
    }
  }

  private loadCachedMembers(): void {
    if (isPlatformBrowser(this.platformId)) {
      const cachedMembers = localStorage.getItem('members');
      if (cachedMembers) {
        const data = JSON.parse(cachedMembers);
        this.memberReplaySubject$.next(data);
        this.membersSubject.next(data || []);
      } else {
        this.fetchMembers();
      }
    }
  }

  private fetchMembers(): void {
    this.http.get<any[]>(this.memberURL)
      .pipe(
        shareReplay(1),
        takeUntil(this.destroy$)
      )
      .subscribe((data) => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('members', JSON.stringify(data));
        }
        this.memberReplaySubject$.next(data);
        this.membersSubject.next(data || []);
      });
  }

  getMembers(): void {
    this.memberReplaySubject$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.membersSubject.next(data || []);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
*/
