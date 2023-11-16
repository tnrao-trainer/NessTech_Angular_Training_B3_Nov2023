import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public  usersArray:any[]  = 
    [
      {uname  :  "Smith",  gender:  "M"},
      {uname  :  "Scott",  gender:  "m"},
      {uname  :  "Nancy",  gender:  "F"},
      {uname  :  "Ruth",   gender:  "f"},
    ];

}
