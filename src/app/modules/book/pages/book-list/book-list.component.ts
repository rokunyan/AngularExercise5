import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  books : Book[];
  bookIdsToEdit: number[] = [];
  bookIdsToDelete: number[] = [];

  constructor(private bookService : BookService ){
    this.books = bookService.getBooks();
  }

  edit = (id : number) =>{
    console.log('id #' + id + ' has been passed to edit button.'); //for checking
    this.bookIdsToEdit.push(id)
  }

  delete = (id : number) =>{
    console.log('id #' + id + ' has been passed to delete button.'); //for checking
    this.bookIdsToEdit.push(id)
  }

}
