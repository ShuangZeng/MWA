import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart',
  template: `
    <app-dumb [elements]="state.data"> </app-dumb>
  `,
  styles: []
})
export class SmartComponent implements OnInit {

 state = {
    data: [
      {
        "foo" : "bar",
        "isVisible" : true
      },
      {
        "foo" : "lorem",
        "isVisible" : true
      },
      {
        "foo" : "dolor",
        "isVisible" : false
      }
    ]
  }
  constructor() { }

  ngOnInit() {

  }

}
