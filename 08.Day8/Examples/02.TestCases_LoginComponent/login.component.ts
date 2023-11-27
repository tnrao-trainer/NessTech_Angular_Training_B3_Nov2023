import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
    public uid:string  = "";
    public pwd:string  = "";
    public result:string  = "";


    public loginButton_click():void
    {
        if(this.uid == "admin"  && this.pwd  == "admin123")
        {
            this.result  = "Welcome to Admin";
        }
        else
        {
          this.result  = "Invalid user id or password";
        }
    }

}
