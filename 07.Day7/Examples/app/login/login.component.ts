import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  uid:string  = "admin";
  pwd:string  = "admin123";
  result:string  = "";


  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  loginButton_click()
  {

    let returnUrl = this.activatedRoute.snapshot.queryParams["returnUrl"];

    if(returnUrl == null || returnUrl == undefined)
    {
      returnUrl = "/";
    }

    if(this.uid == "admin"  && this.pwd == "admin123")
    {
        // ajax call to send uid, pwd and get the token from server
        let token = "eyJpc3MiOiJ0b3B0YWwuY29tIiwiZXhwIjoxNDI2NDIwODAwLCJodHRwOi8v";
        sessionStorage.setItem("AUTH_TOKEN", token);
        this.router.navigate([returnUrl]);
    } 
    else
    {
      this.result  = "Invalid user id or password";
    }
  }

}
