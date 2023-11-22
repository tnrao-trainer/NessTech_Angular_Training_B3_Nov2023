import { Component } from '@angular/core';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  username:string = "";
  message:string = "";
  
  constructor(private helloService:HelloService)
  {
      
  }


  getMessageButton_click()
  {
    this.message  = this.helloService.greeting(this.username);
    // alert(this.message);
  }
   
    
}
