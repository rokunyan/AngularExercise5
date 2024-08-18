import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookFormComponent } from './pages/book-form/book-form.component';
import { bookResolver } from './resolver/book.resolver';

const routes: Routes = [{
  path: '',
  component: BookListComponent,
  resolve:{
    books: bookResolver
  }
},
{
  path: 'form',
  component: BookFormComponent
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class BookRoutingModule { }
