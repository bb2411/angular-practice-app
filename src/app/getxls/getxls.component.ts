import { Component } from '@angular/core';
import { GetxlsService } from '../services/getxls.service';
import { blob } from 'stream/consumers';

@Component({
  selector: 'app-getxls',
  templateUrl: './getxls.component.html',
  styleUrl: './getxls.component.css'
})
export class GetxlsComponent {
  link:any;
  requestxls(){
    this.services.getxls().subscribe((data)=>{
      const xlsdata=new Blob([data],{type:"application/xls"});
      this.link=URL.createObjectURL(xlsdata);
    })
  }
  constructor(private services:GetxlsService){}
}
