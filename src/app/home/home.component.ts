import { Component } from '@angular/core';
import { AdduserService } from '../adduser.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers:[AdduserService]
})
export class HomeComponent {
  usernames:string[]=[]
  passwords:string[]=[]
  displaydata(){
    this.usernames=this.db.getusername();
    this.passwords=this.db.getpassword();
  }
  constructor(private db:AdduserService){}
}
