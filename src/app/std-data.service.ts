import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StdDataService {
  std1: string[]=["bhargav bhatt","e123","bhargav@mail.com"];
  std2: string[]=["aditya pithva","e124","aditya@mail.com"];
  std3: string[]=["darshan jadav","e125","darshan@mail.com"];
  constructor() { }
  getstd1(){
    return this.std1;
  }
  getstd2(){
    return this.std2;
  }
  getstd3(){
    return this.std3;
  }
}
