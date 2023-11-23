import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Student } from '../models/studentModel';

@Component({
  selector: 'app-http-demo3',
  templateUrl: './http-demo3.component.html',
  styleUrl: './http-demo3.component.css'
})
export class HttpDemo3Component {

  name:string  = "";
  city:string  = "";
  email:string  = "";
  age:number = 0;
  studentId:number = 0;


  studentsArray:Student[] = [];

  constructor(private  dataService:DataService)
  {

  }

  getData_click()
  {  
    this.dataService.getAllStudents().subscribe((resData:Student[]) =>
    {
      this.studentsArray = resData;
    });
  }


  addData_click()
  {
    let stObj:Student = new Student();
    stObj.studentId = 0;
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;

    this.dataService.addStudent(stObj).subscribe((resData:Student) =>
    {
        alert("New Student details are added to database");
        this.getData_click();
        this.clearFields();
    });
  }


  selectData_click(id:number)
  {
    this.studentId = id;
    
    this.dataService.getStudentById(id).subscribe( (resData:Student) =>
    {
      this.name = resData.name;
      this.email = resData.email;
      this.city = resData.city;
      this.age = resData.age;
    });
  }

  deleteData_click(id:number)
  {
    let flag = confirm("Do you want to delete?");

    if( flag == false )
    {
      return; 
    }

    this.dataService.deleteStudent(id).subscribe((resData:Student) =>
    {
        alert("Student details are deleted from database");
        this.getData_click();  
    });
  }


  updateData_click()
  {
    let stObj:Student = new Student();
    stObj.studentId = this.studentId;
    stObj.name = this.name;
    stObj.city = this.city;
    stObj.email = this.email;
    stObj.age = this.age;

      this.dataService.updateStudent(stObj).subscribe((resData:Student) =>
      {
          alert("Student details are updated to database");
          this.getData_click();
          this.clearFields();
      });
  }


  clearFields()
  {
    this.name = "";
    this.email = "";
    this.city = "";
    this.age = 0;
  }





}
