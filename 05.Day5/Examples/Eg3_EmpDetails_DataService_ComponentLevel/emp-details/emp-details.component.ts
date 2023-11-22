import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../models/emp.model';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrl: './emp-details.component.css',
  providers :  [DataService]
})
export class EmpDetailsComponent {

  empObj:any =  {"empno":0,"ename":"","job":"","sal":0,"deptno":0};
  empno:number = 0;

  constructor(private dataService:DataService)
  {

  }

  buttonClick()
  {
    this.empObj = this.dataService.getEmployeeById(this.empno);

    if(this.empObj == undefined)
    {
        alert("Invalid employee number");
        this.empObj ={"empno":0,"ename":"","job":"","sal":0,"deptno":0};
    }
  }

}
