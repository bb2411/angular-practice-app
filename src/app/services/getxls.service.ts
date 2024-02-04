import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetxlsService {
  getxls(): Observable<Blob>{
    return this.servic.get("http://localhost:8080/apis/generatexlsx",{responseType:"blob"});
  }
  constructor(private servic:HttpClient) { }
}
