import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent {

  blogForm : FormGroup;
  comments: FormArray;

  constructor(private fb:FormBuilder, blogService: BlogService ){
    this.blogForm = this.fb.group({
      title: blogService.selectedBlog.title,
      description: blogService.selectedBlog.description,
      author: blogService.selectedBlog.author,
      comments: this.fb.array(blogService.selectedBlog.comments)
    }),
    this.comments =  this.blogForm.controls['comments']  as FormArray
  }

  onSubmit = () =>{
  }

}
