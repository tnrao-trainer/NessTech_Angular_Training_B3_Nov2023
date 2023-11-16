import { Component } from '@angular/core';
import { Employee } from '../models/empModel';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent {

  deptno:number  = 10;

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

}
