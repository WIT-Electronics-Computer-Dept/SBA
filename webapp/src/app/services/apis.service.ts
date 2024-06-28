import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GroupByService } from './group-by.service';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  private noticeURL = 'http://localhost:3000/notices';


  private currentNoticesSubject: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);
  public currentNotices$: Observable<any[]> =
    this.currentNoticesSubject.asObservable();

    private archivedNoticesSubject: BehaviorSubject<any[]> = new BehaviorSubject<
    any[]
  >([]);
  public archivedNotices$: Observable<any[]> =
    this.archivedNoticesSubject.asObservable();

  constructor(
    private http: HttpClient,
    private groupByService: GroupByService
  ) {}
  // CRUD methods for notice API
  getNotices(): Observable<any[]> {
    return this.http.get<any[]>(this.noticeURL);
  }
  getNotice(id: number): Observable<any> {
    return this.http.get<any>(`${this.noticeURL}/${id}`);
  }

  getCurrentNotices(): void {
    this.getNotices().subscribe((data) => {
      const groupedData = this.groupByService.groupBy(data, 'status');
      const currentNotices = groupedData['current'] || [];
      this.currentNoticesSubject.next(currentNotices);
    });
  }
  getArchivedNotices(): void {
    this.getNotices().subscribe((data) => {
      const groupedData = this.groupByService.groupBy(data, 'status');
      const archivedNotices = groupedData['archived'] || [];
      this.archivedNoticesSubject.next(archivedNotices);
    });
  }

}
