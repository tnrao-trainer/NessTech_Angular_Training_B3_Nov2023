import { Component, Input } from '@angular/core';
import { Employee } from '../models/emp.model';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrl: './emps.component.css'
})
export class EmpsComponent {

  @Input() job:string  = "";

  filteredArray:Employee[] = [];
 
  public  empsArray:Employee[]  =  [
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  } ,
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  } ,
    {  empno : 10256, ename:"Scott", job: "Manager", deptno : 10  },
    {  empno : 10257, ename:"Smith", job: "Lead", deptno : 20  },
    {  empno : 10258, ename:"Sandy", job: "Programmer", deptno : 30  },
    {  empno : 10259, ename:"Sam", job: "Tester", deptno : 40  } 
  ];		


  // This occures whenever input property value  updated 
  ngOnChanges()
  {    
    if(this.job == "All Jobs")
      this.filteredArray = this.empsArray;
    else
      this.filteredArray = this.empsArray.filter(item => item.job == this.job);
  }



}
