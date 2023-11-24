import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-depts',
  templateUrl: './depts.component.html',
  styleUrls: ['./depts.component.css']
})
export class DeptsComponent implements OnInit 
{
  public depts:string[]   =  ["Accouts", "Sales", "Marketing", "Testing", "Admin"];

  constructor() { }

  ngOnInit() {
  }

}
