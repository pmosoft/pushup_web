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
  insertExeGoalCntHis(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8082/pushup/insertExeGoalCntHis', pushup, httpOptions);
  }

  /**
   * [저장] 유저의 운동 목표 횟수 이력 정보
  */
  insertExeHis(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8082/pushup/insertExeHis', pushup, httpOptions);
  }

  /** 
   * [조회] 유저의 최근 운동 목표수
  */
  selectExeGoalCnt(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8082/pushup/selectExeGoalCnt', pushup, httpOptions);
  }

  /** 
   * [조회] 유저의 운동 목표수 이력
  */
  selectExeGoalCntHis(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8082/pushup/selectExeGoalCntHis', pushup, httpOptions);
  }

  /** 
   * [조회] 유저의 당일 운동 정보
  */
  selectExeInfo(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8082/pushup/selectExeInfo', pushup, httpOptions);
  }

  /** 
   * [조회] 유저의 운동이력 정보
  */
  selectExeHis(pushup: Pushup): Observable<any> {
    return this.http.post<any>('http://'+this.document.location.hostname+':8082/pushup/selectExeHis', pushup, httpOptions);
  }
   
}
