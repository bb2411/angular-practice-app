import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usertable } from './usertable';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CallapiService {
  getdata(): Observable<Usertable[]> {
    return this.service.get<Usertable[]>("http://localhost:8080/apis/userdata");
  }
  constructor(private service:HttpClient) { }
}
