import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {

  public fname: string = "";
  public lname: string = "";
  public city: string = "";
  public email: string = "";
  public pincode: string = "";

  public submit_click():void
  {
      // make an ajax call to send data to server
      alert("Customer Details are registered.");
  }

}
