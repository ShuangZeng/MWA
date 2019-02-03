import { Directive, ElementRef, Renderer2, Input,OnInit } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements OnInit  {
@Input() private appIsVisible: boolean;

  constructor(private element: ElementRef, private render: Renderer2) {

      }

      ngOnInit(){
        if(!this.appIsVisible){
          console.log("test " + this.appIsVisible)
          this.render.setStyle(this.element.nativeElement, 'visibility', 'hidden')
          }
        
      }
}
