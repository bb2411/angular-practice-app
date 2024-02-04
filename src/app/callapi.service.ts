import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usertable } from './usertable';
import { Observable } from 'rxjs';
import { Response } from './response'; 
import { json } from 'stream/consumers';
@Injectable({
  providedIn: 'root'
})
export class CallapiService {
  private httpoption={
    headers:new HttpHeaders({"Content-Type":"application/json"}),
  }
  getdata(): Observable<Usertable[]> {
    return this.service.get<Usertable[]>("http://localhost:8080/apis/userdata");
  }
  adddata(name: string, password: string): Observable<Response> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    const params = new HttpParams()
      .set('name', name)
      .set('password', password);

    return this.service.post<Response>("http://localhost:8080/apis/adduser", params, { headers: headers });
  }
  constructor(private service:HttpClient) { }
}
function json_encode(payload: { name: string; password: string; }): any {
  throw new Error('Function not implemented.');
}

