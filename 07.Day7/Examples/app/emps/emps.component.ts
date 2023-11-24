import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';

@Component({
  selector: 'app-emps',
  templateUrl: './emps.component.html',
  styleUrls: ['./emps.component.css']
})
export class EmpsComponent 
{
  public emps:any[]  = [
    {empno: 1025, ename : "Scott", job : "Manager", sal : 56000},
    {empno: 1026, ename : "Smith", job : "Sr.Manager", sal : 65000},
    {empno: 1027, ename : "Sandy", job : "Lead", sal : 45000},
    {empno: 1028, ename : "Sam", job : "Group Manager", sal : 75000},
  ];

  constructor() 
  {
    this.emps.push(...this.emps);
    this.emps.push(...this.emps);
    this.emps.push(...this.emps);
    this.emps.push(...this.emps);
  }
 
}
