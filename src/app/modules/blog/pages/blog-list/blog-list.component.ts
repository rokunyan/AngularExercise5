import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  blogs : Blog[];
  blogIdsToEdit: number[] = [];
  blogIdsToDelete: number[] = [];

  constructor(private blogService : BlogService ){
    this.blogs = blogService.getBlogs();
  }

  edit = (id : number) =>{
    console.log('id #' + id + ' has been passed to edit button.'); //for checking
    this.blogIdsToEdit.push(id)
  }

  delete = (id : number) =>{
    console.log('id #' + id + ' has been passed to delete button.'); //for checking
    this.blogIdsToDelete.push(id)
  }
}
