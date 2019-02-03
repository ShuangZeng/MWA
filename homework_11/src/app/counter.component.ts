import { Component,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<div>
  <p> Counter Component:  <button  (click)="subtract()"> - </button>  {{counterValue}} <button (click)="add()" > + </button>  </p>
  </div>
  `,
  styles: []
})
export class CounterComponent {
  @Output() onCounterChange = new EventEmitter();
  @Input() counterValue: number = 0;
  constructor() { 

  }

  subtract(){
    this.counterValue--;
    this.onCounterChange.emit(this.counterValue);
  }

  add(){
    this.counterValue++;
    this.onCounterChange.emit(this.counterValue);
  }

}
