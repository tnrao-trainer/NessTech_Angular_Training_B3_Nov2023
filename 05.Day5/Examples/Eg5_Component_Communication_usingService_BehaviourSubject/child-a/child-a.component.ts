import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child-a',
  templateUrl: './child-a.component.html',
  styleUrl: './child-a.component.css'
})
export class ChildAComponent {

  message: string = "";

  constructor(private dataService: DataService) {}

  sendMessage() {
    this.dataService.changeMessage(this.message);
  }

}
