import { Component, OnInit, Input, Pipe } from '@angular/core';

@Component({
  selector: 'app-dumb',
  template: `
    <ul>
    <li [appIsVisible]="item.isVisible" appLoggable *ngFor="let item of elements"> {{item | json}} </li>
    </ul>
  `,
  styles: []
})
export class DumbComponent implements OnInit {
  @Input() elements;

  constructor() { }

  ngOnInit() {
  }

}
