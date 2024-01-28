import { Component } from '@angular/core';
import { AdduserService } from '../adduser.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[AdduserService]
})
export class LoginComponent {
  message=''
  adduser(frm:NgForm){
    console.log(frm.value)
    this.message=this.db.adduser(frm.value.username,frm.value.password)
  }
  constructor(private db:AdduserService){}
}
