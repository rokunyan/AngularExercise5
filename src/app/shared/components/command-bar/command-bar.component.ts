import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrl: './command-bar.component.css'
})
export class CommandBarComponent {


@Output() actionEmitter = new EventEmitter<any>();

sendAdd = () => {
  this.actionEmitter.emit('edit');
};

sendDelete = () => {
  this.actionEmitter.emit('deleteAll');
};

}
