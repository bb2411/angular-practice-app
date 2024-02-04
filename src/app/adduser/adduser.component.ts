import { Component } from '@angular/core';
import { Users } from '../users';
import { Response } from "../response" 
import { CallapiService } from '../callapi.service';
import { response } from 'express';
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrl: './adduser.component.css'
})
export class AdduserComponent {
  msg:Response | undefined
  adduser(data:any){
    console.log(data.form.value['name'])
    this.service.adddata(data.form.value['name'],data.form.value['password']).subscribe((res:Response) =>  {
      this.msg=res;
    })
  }
  constructor(private service:CallapiService){}
}
