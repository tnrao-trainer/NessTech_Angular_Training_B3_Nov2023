import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './models/empModel';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(input: Employee[], dno:number) : Employee[] {
    let output:Employee[] = [];
    
 
    if(dno == -1)
      output = input;
    else
      output  = input.filter( item => item.deptno == dno );

    return output;
  }
}
