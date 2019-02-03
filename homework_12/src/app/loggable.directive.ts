import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {
numberOfclick = 0
  constructor() { }

  @HostListener('dblclick', ['$event.target']) onClick(btn) {
    console.log(btn.innerHTML, '\n has been clicked', ++this.numberOfclick);
  }
}


