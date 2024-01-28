import { Injectable } from '@angular/core';
import { UserInfo } from 'os';
import { PassThrough } from 'stream';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {
  username=''
  password=''
  userinfo={'username':'',"password":''}
  static usernames:string[]=[]
  static passwords:string[]=[]
  constructor() { }
  adduser(username:string,password:string){
    this.username=username;
    this.password=password;
    this.userinfo.username=username;
    this.userinfo.password=password;
    AdduserService.usernames.push(this.username)
    AdduserService.passwords.push(this.password)
    return "user added"
  }
  getusername(){
    return AdduserService.usernames;
  }
  getpassword(){
    return AdduserService.passwords;
  }
}
