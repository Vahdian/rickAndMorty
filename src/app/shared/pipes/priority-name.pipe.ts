import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityName'
})
export class PriorityNamePipe implements PipeTransform {

  transform(value, arg){
    if (value.includes(arg)){
      return '*' + value + '*';
    } else {
      return value;
    }
  }

}
