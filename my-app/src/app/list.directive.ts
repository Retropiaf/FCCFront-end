import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appList]'
})
export class ListDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
