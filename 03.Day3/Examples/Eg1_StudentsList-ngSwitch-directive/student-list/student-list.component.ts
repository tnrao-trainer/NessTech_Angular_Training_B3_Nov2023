import { Component } from '@angular/core';
import { Student } from '../models/studentModel';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {


  displayMode:string  = "List";

  studentsArray:Student[] = [
    {sname  :  "Scott", course : "Angular"},
    {sname  :  "Smith", course : "HTML5"},
    {sname  :  "Smith", course : "React JS"},
    {sname  :  "James", course : "Angular"},
    {sname  :  "Adam", course : "Java Script"},
    {sname  :  "Sathya", course : "React JS"},
    {sname  :  "Mark", course : "Angular"},
    {sname  :  "Peter", course : "Node JS"},
    {sname  :  "Maneesh", course : "React JS"},
    {sname  :  "Ramesh", course : "Angular"},
    {sname  :  "Vinush", course : "Java Script"},
    {sname  :  "Haneesh", course : "React JS"}
  ];

}
