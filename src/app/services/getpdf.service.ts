import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetpdfService {
  requestpdf(name:string,sem:number): Observable<Blob>{
    let params=new HttpParams()
    .set('name',name).set('sem',sem);
    return this.service.get("http://localhost:8080/apis/generatepdf",{params:params,responseType:'blob'})
  }
  constructor(private service:HttpClient) { }
}
