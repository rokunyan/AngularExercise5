import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private serviceURL = 'http://localhost:3000/books'

  constructor(private http : HttpClient){}

 //reading books from json db

  findAllBooks = () => { 
    return this.http.get<any>(this.serviceURL)
    .pipe(tap((x) => x))
  }

  selectedBook : Book = {
    id: '0' ,
    name: '',
    authors: [''],
    isbn: '',
  }
  
  setSelectedBook = (book : Book) => {
    this.selectedBook = book
  }

  createBook = (book : Book) => {
    return this.http.post(this.serviceURL, book).pipe()
  }

  updateBook = (book : Book) => {
    return this.http.put(`${this.serviceURL}/${book.id}`, book).pipe()
  }

  deleteBook = (id: any) => {
    return this.http.delete(`${this.serviceURL}/${id}`).pipe()
  }
}

