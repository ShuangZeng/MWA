import { Component, Input, Output , EventEmitter} from '@angular/core';


@Component({
  selector: 'app-counter-component',
  template: `
    <h1><p class = "red">{{message}} </p></h1>
    <button (click)="increase()"> + </button>
    {{value}}
    <button (click) = "decrease()"> - </button>
    <p><ng-content></ng-content></p>
  `,
  styles: ['p.red { color: red; }'],
})

export class CounterComponent{
  @Input() message;
  @Input() value;
  @Input() componentCounterValue;
  @Output() counterChange = new EventEmitter();
  increase(){
    this.value = this.value + 1;
    this.counterChange.emit(this.value);
    //return false;
  }
  decrease(){
    this.value = this.value - 1;
    this.counterChange.emit(this.value);
    //return false;
  }
}