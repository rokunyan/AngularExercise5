import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  //set random books for sample
  bookArray: Book[] = [
    {
      id: 1,
      name: 'Animal Stories',
      authors: ['Maria Hoey', 'Peter Hoey'],
      isbn: '978-1-60309-502-0'

    },
    {
      id: 2,
      name: 'But You Have Friends',
      authors: ['Emilia McKenzie'],
      isbn: '978-1-60309-527-3'

    },
    {
      id: 3,
      name: 'Doughnuts and Doom',
      authors: ['Balazs Lorinczi'],
      isbn: '978-1-60309-513-6'

    },
    {
      id: 4,
      name: 'The Fun Family',
      authors: ['Benjamin Frisch'],
      isbn: '978-1-60309-344-6'

    }, 
    {
      id: 5,
      name: 'Korgi: The Complete Tale',
      authors: ['Christian Slade'],
      isbn: '978-1-60309-538-9'

    }
  ]

  defaultBook : Book = {id: this.bookArray.length + 1, name: '', authors:[''], isbn:''};
  selectedBook = this.defaultBook

  setSelectedBook = (id : number) => {
    if(id === 0){
      this.selectedBook = this.defaultBook
    } else this.selectedBook = this.bookArray[id-1]
  } 

  getBooks = () =>{
    return this.bookArray;
  }
}

