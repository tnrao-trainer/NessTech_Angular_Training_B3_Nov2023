import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appIsAdmin]'
})
export class IsAdminDirective {

  @Input()
  appIsAdmin: boolean = false;

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>) {

  }


  ngOnChanges() {

    if (this.appIsAdmin == true) {
        // Show ---  add the dom element
        this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
        // hide---  removes the dom element
        this.viewContainer.clear();

    }


  }

}
