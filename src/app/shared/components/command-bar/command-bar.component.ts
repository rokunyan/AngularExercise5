import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.css'
})
export class CommandBarComponent {

@Input('inputItem') input: any | undefined

@Output() actionEmitter = new EventEmitter<any>();

sendAction = () => {
  this.actionEmitter.emit(this.input);
};

}
