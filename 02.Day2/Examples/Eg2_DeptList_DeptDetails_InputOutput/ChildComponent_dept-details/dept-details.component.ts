import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Dept } from '../models/deptModel';

@Component({
  selector: 'app-dept-details',
  templateUrl: './dept-details.component.html',
  styleUrl: './dept-details.component.css'
})
export class DeptDetailsComponent {

  @Input() deptObj:Dept = new Dept();
  @Output() onDeptRemove:EventEmitter<number> = new  EventEmitter();

  public deptRemove_child_click():void
  {
      // emitting the event to parent
      this.onDeptRemove.emit(this.deptObj.deptno);
  }

}
