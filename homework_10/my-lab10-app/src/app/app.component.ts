import { Component } from "@angular/core";

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html',
})
export class AppComponent{
  public counterValue = 100;
  public message = "This is my Counter";
  public outputFromChild;
  public componentCounterValue;

  childData(data){
    this.outputFromChild = data;
    this.componentCounterValue = data;
    console.log("I am listening the value from Child: " + this.outputFromChild);
  }
}