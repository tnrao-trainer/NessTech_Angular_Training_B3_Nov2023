import { Component } from '@angular/core';
import { Employee } from '../models/emp.model';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.css'
})
export class EmpListComponent {

  empsArray:Employee[]= [];

  constructor(private  dataService:DataService)
  {

  }

  buttonClick()
  {
     this.empsArray = this.dataService.getAllEmployees();
  }

}
