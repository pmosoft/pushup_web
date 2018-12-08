import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pushup } from './pushup';
import { DOCUMENT } from '@angular/platform-browser';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class PushupService {

  pushup : Pushup;
  private heroesUrl = '/pushup/test3';  // URL to web api

  constructor(private http: HttpClient
             ,@Inject(DOCUMENT) private document: any) { }


  /**
   * [저장] 유저의 운동 수행 이력 정보
  */
  saveExerGoalCntHis(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8082/pushup/saveExerGoalCntHis', pushup, httpOptions);
  }

  /**
   * [저장] 유저의 운동 목표 횟수 이력 정보
  */
  saveExerHis(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8082/pushup/saveExerHis', pushup, httpOptions);
  }

  /** 
   * [조회] 유저의 운동이력 정보
  */
  selectExerHis(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8082/pushup/selectExerHis', pushup, httpOptions);
  }

  /** 
   * [조회] 유저의 운동 목표수 이력
  */
  selectExerGoalCntHis(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8082/pushup/selectExerGoalCntHis', pushup, httpOptions);
  }
   
}
