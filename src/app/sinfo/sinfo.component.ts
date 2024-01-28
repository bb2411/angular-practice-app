import { Component } from '@angular/core';
import { SdataService } from '../sdata.service';
@Component({
  selector: 'app-sinfo',
  templateUrl: './sinfo.component.html',
  styleUrl: './sinfo.component.css',
  providers:[SdataService]
})
export class SinfoComponent {
  sinfo1: string[]=[] 
  sinfo2: string[]=[]
  sinfo3: string[]=[]
  getsinfo1(){
    this.sinfo1=this.dataserv.getstd1();
  }
  getsinfo2(){
    this.sinfo2=this.dataserv.getstd2();
  }
  getsinfo3(){
    this.sinfo3=this.dataserv.getstd3();
  }
  updateinfo(frm:any){
    console.log(frm.value.location);
    this.dataserv.addinfo(frm.value.location);
  }
  constructor(private dataserv:SdataService){}
}
