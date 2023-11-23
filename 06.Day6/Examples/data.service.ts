import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from './models/studentModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl: string = "http://localhost:3000/students/";

  constructor(private httpClient: HttpClient) {
  }


  public getAllStudents(): Observable<Student[]> {
    // return this.httpClient.get(this.url);   // weakly typed  response
    return this.httpClient.get<Student[]>(this.baseUrl);  // strongly typed response
  }

  // Read Single
  getStudentById(id: number): Observable<Student> {
    return this.httpClient.get<Student>(this.baseUrl + id);
  }


  // Create
  addStudent(studentObj: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.baseUrl, studentObj);
  }

  // update
  updateStudent(studentObj: Student): Observable<Student> {
    let id = studentObj.studentId;
    return this.httpClient.put<Student>(this.baseUrl + id, studentObj);
  }


  // Delete 
  deleteStudent(id:number):Observable<Student>
  {
    return this.httpClient.delete<Student>(this.baseUrl + id);
  }


}