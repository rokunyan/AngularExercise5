import { ResolveFn } from '@angular/router';
import { BookService } from '../services/book.service';
import { inject } from '@angular/core';

export const bookResolver: ResolveFn<boolean> = (route, state) => {
  return inject(BookService).findAllBooks()
};
