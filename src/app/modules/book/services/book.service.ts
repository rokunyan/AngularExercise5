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

 //reading blogs from json db

 bookArray: Book[] = []

  findAllBooks = () => { 
    return this.http.get<any>(this.serviceURL)
    .pipe(tap((data) => {this.bookArray = data}))
  }

  defaultBook : Book = {id: this.bookArray.length + 1, name: '', authors:[''], isbn:''};
  selectedBook = this.defaultBook

  setSelectedBook = (id : number) => {
    this.selectedBook = (this.bookArray.filter((data) => data.id === id))[0] ?? this.defaultBook
  } 

  getBooks = () =>{
    return this.bookArray;
  }
}

