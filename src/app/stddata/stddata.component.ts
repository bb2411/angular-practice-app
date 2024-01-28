import { Component } from '@angular/core';
import { StdDataService } from '../std-data.service';
@Component({
  selector: 'app-stddata',
  templateUrl: './stddata.component.html',
  styleUrl: './stddata.component.css',
  providers:[StdDataService]
})
export class StddataComponent {
    info1: string[]=[];
    info2: string[]=[];
    info3: string[]=[];
    getinfo1(){
      this.info1=this.rserv.getstd1();
    }
    getinfo2(){
      this.info2=this.rserv.getstd2();
    }
    getinfo3(){
      this.info3=this.rserv.getstd3();
    }
    constructor(private rserv:StdDataService){

    }
}
