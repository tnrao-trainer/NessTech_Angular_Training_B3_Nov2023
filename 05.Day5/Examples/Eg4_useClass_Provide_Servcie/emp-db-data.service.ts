import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Employee } from './models/emp.model';

@Injectable({
  providedIn: 'root'
})
export class EmpDbDataService implements DataService {

  
  empDataArray:Employee[] = [];

  constructor() {
       
   }

  public getAllEmployees():Employee[]
  {
    return [];
  }

  public getEmployeeById(id:number) : Employee | undefined
  {    
    console.log("Message from EmpDbDataService");
    //  db logic 
    let empObj:Employee = {"empno":7369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20};
    return  empObj;
  }
}
;