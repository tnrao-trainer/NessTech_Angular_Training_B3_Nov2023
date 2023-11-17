import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter-options',
  templateUrl: './filter-options.component.html',
  styleUrl: './filter-options.component.css'
})
export class FilterOptionsComponent {

  strJob:string  = "All Jobs";

  @Output()
  onJobChanged:EventEmitter<string> = new EventEmitter();

  job_change():void
  {
    this.onJobChanged.emit(this.strJob);
  }

}
