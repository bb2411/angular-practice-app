import { Component } from '@angular/core';
import { CallapiService } from '../callapi.service';
import { Usertable } from '../usertable';

@Component({
  selector: 'app-apicomp',
  templateUrl: './apicomp.component.html',
  styleUrl: './apicomp.component.css'
})
export class ApicompComponent {
  usertable:Usertable[]=[]
  printdata(){
    this.services.getdata().subscribe((users:Usertable[])=>{
      console.log(users);
      this.usertable=users;
    })
  }
  constructor(private services:CallapiService){}
}
