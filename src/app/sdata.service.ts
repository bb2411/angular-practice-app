import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SdataService {
  std1: string[]=["bhargav bhatt","e123","bhargav@mail.com"];
  std2: string[]=["aditya pithva","e124","aditya@mail.com"];
  std3: string[]=["darshan jadav","e125","darshan@mail.com"];
  getstd1(){
    return this.std1;
  }
  getstd2(){
    return this.std2;
  }
  getstd3(){
    return this.std3;
  }
  addinfo(frm:string){
    this.std1.push(frm);
    this.std2.push(frm);
    this.std3.push(frm);
    return this.std1;
  }
  constructor() { }
}
