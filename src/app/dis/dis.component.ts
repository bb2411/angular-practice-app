import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-dis',
  templateUrl: './dis.component.html',
  styleUrl: './dis.component.css'
})
export class DISComponent {
  submit(login:NgForm){
    console.log("form submited",login);
  }
}
