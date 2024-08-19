import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css'
})
export class BookFormComponent implements OnInit, OnDestroy{

  bookForm : FormGroup;
  authors: FormArray;
  sub: Subscription| undefined
  books : Book[] =[]
  

  constructor(private fb:FormBuilder, private bookService: BookService){
    this.bookForm = this.fb.group({
      name: bookService.selectedBook.name,
      authors: this.fb.array(bookService.selectedBook.authors),
      isbn: bookService.selectedBook.isbn
    }),
    this.authors =  this.bookForm.controls['authors']  as FormArray
  }

  ngOnInit(): void {
    this.getAllBook()
  }

  getAllBook(){
    this.sub = this.bookService.findAllBooks().subscribe(data => this.books = data as Book[])
  }

  onSubmit = () => {
    
    this.getAllBook()
    
    let book = this.books?.find((u) => u.id === this.bookService.selectedBook.id)
    let length = this.books.length
    let selectedId = this.bookService.selectedBook.id

    if(selectedId === '0' && length !== 0){
      let lastId = ((this.books[length - 1].id as unknown) as number)
      let nextId = (+ lastId + 1)
      selectedId = (nextId  as unknown) as string
    } else if(selectedId === '0' && length === 0){
      selectedId = '1'
    }
    
    let updatedBook: Book = {
      id: (selectedId as string) + '',
      name: this.bookForm.value.name,
      authors: this.authors.value,
      isbn: this.bookForm.value.isbn
    }

    if(book){
      this.sub = this.bookService.updateBook(updatedBook).subscribe(() => this.getAllBook())
    } else {this.sub = this.bookService.createBook(updatedBook).subscribe(() => this.getAllBook())}
      
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe
  }
}
