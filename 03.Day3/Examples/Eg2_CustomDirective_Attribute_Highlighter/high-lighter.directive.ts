import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLighter]'
})
export class HighLighterDirective implements OnInit {


  @Input() 
  appHighLighter:string = "";

  constructor(private el:ElementRef) {

   }


   ngOnInit(): void {

      if(this.appHighLighter != "")
      {
          this.el.nativeElement.style.backgroundColor = this.appHighLighter;
      }
      else
      {
        this.el.nativeElement.style.backgroundColor = "Yellow";
      }
        

   }

}
