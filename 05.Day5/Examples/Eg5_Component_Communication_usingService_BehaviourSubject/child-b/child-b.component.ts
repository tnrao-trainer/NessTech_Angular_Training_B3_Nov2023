import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrl: './child-b.component.css'
})
export class ChildBComponent {

  message: string = "";

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.currentMessage.subscribe(message => this.message = message);
  }

}
