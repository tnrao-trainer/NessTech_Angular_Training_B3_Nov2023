import { Component } from '@angular/core';
import { Dept } from '../models/deptModel';

@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrl: './dept-list.component.css'
})
export class DeptListComponent {

  deptsArray:Dept[] = [
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
    {deptno : 10, dname : "Accounts",  loc :  "Hyd"} ,
    {deptno : 20, dname : "Sales",  loc :  "Pune"},
    {deptno : 30, dname : "Marketing",  loc :  "Hyd"},
  ];


  public deptRemove_parent_click(dno:number) : void
  {
    //  alert("Message from parent component");
    // alert("Selected Deptno :  "+  dno);

    let index = this.deptsArray.findIndex(item => item.deptno == dno);
    this.deptsArray.splice(index, 1);    
  }

}
