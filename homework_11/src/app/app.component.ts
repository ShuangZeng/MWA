import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-counter [counterValue]="1" (onCounterChange)="countreTracking($event)"> </app-counter> 
  <p>Component Counter Value = {{componentCounterValue}}</p>
  `,
  styles: []
})
export class AppComponent {
  title = 'Exercise1';

  componentCounterValue: number = 0

  _componentCounterValue(value: number): void{
    this.componentCounterValue = value;
  }


  countreTracking(counter){
    this.componentCounterValue = counter;
      console.log(counter);
  }
}
