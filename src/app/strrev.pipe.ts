import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strrev'
})
export class StrrevPipe implements PipeTransform {
  revstring=''
  transform(value: String): String{
    this.revstring=String(value.split("").reverse().join(""));
    return this.revstring;
  }

}
