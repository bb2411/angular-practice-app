import { Component } from '@angular/core';
import { GetpdfService } from '../services/getpdf.service';

@Component({
  selector: 'app-pdfget',
  templateUrl: './pdfget.component.html',
  styleUrl: './pdfget.component.css'
})
export class PdfgetComponent {
  link:any
  getpdf(frm:any){
    let name=frm.form.value['name'];
    let sem=frm.form.value['sem'];
    this.service.requestpdf(name,sem).subscribe((pdfdata)=>{
      let file=new Blob([pdfdata],{type:"application/pdf"});
      this.link=URL.createObjectURL(file);
    });

  }
  constructor(private service:GetpdfService){}
}
