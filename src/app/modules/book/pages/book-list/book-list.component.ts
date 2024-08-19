import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit, OnDestroy {

  books : Book[] | undefined;
  sub: Subscription | undefined

  constructor(private bookService : BookService){
    this.sub = this.bookService.findAllBooks().subscribe(data => this.books = data as Book[])
  }

  ngOnInit(): void {
    this.getAllBook()
  }

  getAllBook(){
    this.bookService.findAllBooks().subscribe(data => this.books = data as Book[])
  }

  edit = (id : string) =>{
    let book = this.books?.filter((data) => data.id === id)[0]
    let length = (this.books?.length)?? 0
    if(book){
      this.bookService.setSelectedBook(book)
    }else if(this.books && length > 0){
      let finalBook = this.books[length - 1]
      let nextId = (+ finalBook.id as unknown as number) + 1
      this.bookService.setSelectedBook({id: ((nextId as unknown) as string)+'', name: '', authors : [''], isbn:''})
    } else{
      this.bookService.setSelectedBook({id: '1', name: '', authors : [''], isbn:''})
    }

  }
  delete = (id : string) =>{
    this.sub = this.bookService.deleteBook(id).subscribe(() => this.getAllBook())
  }

  call = (input: string) => {
    if(input === 'edit'){
      this.edit('0');
    }else {
      this.books?.forEach((data) => this.delete(data.id))
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe
  }

}
