import { Injectable } from '@angular/core';
import { Employee } from './models/emp.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  empDataArray:Employee[] = [];

  constructor() {
      this.empDataArray =  [
        {"empno":6589,"ename":"SRIRAM","job":"MANAGER","sal":3200,"deptno":30},
        {"empno":7369,"ename":"SMITH","job":"CLERK","sal":800,"deptno":20},
        {"empno":7499,"ename":"ALLEN","job":"SALESMAN","sal":1600,"deptno":30},
        {"empno":7521,"ename":"WARD","job":"SALESMAN","sal":1250,"deptno":30},
        {"empno":7566,"ename":"JONES","job":"MANAGER","sal":2975,"deptno":20},
        {"empno":7654,"ename":"MARTIN","job":"SALESMAN","sal":1250,"deptno":30}       
    ];
   }

  public getAllEmployees():Employee[]
  {
    return this.empDataArray;
  }

  public getEmployeeById(id:number) : Employee | undefined
  {    
    return this.empDataArray.find(item => item.empno == id);   
  }

}
