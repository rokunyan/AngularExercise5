import { Component, Input, Output } from '@angular/core';
import { Book } from '../../models/book';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css'
})
export class BookItemComponent {

  @Input('bookItem') book: Book | undefined;
  
}
