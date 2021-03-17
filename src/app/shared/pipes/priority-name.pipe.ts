import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityName'
})
export class PriorityNamePipe implements PipeTransform {

  transform(value: any, arg: any){
    if (value.includes(arg)){
      return '*' + value + '*';
    } else {
      return value;
    }
  }

}
