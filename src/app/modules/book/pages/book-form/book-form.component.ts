import { Component, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent {

  bookForm : FormGroup;
  authors: FormArray;

  constructor(private fb:FormBuilder, bookService: BookService){
    this.bookForm = this.fb.group({
      name: bookService.selectedBook.name,
      authors: this.fb.array(bookService.selectedBook.authors),
      isbn: bookService.selectedBook.isbn
    }),
    this.authors =  this.bookForm.controls['authors']  as FormArray
  }

  onSubmit = () =>{

  }
}
