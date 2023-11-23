import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo2',
  templateUrl: './http-demo2.component.html',
  styleUrl: './http-demo2.component.css'
})
export class HttpDemo2Component 
{
  deptsArray:any[] = [];

  constructor(private httpClient:HttpClient)
  {
    
  }

  getData_click()
  {
    let url  = "http://localhost:3000/depts";
    this.httpClient.get(url).subscribe((resData:any) => 
    {
      //  console.log(resData);
         this.deptsArray = resData;
    });
  }

}
