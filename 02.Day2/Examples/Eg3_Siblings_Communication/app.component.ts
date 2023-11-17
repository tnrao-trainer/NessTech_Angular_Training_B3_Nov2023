import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  selectedJob:string = "All Jobs";
 
  updateJob(strJob:string): void
  {
    this.selectedJob = strJob;
    
  }
    
}
