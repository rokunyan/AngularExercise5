import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { Blog } from '../../models/blog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrl: './blog-form.component.css'
})
export class BlogFormComponent implements OnInit, OnDestroy{

  blogForm : FormGroup;
  comments: FormArray;
  sub: Subscription| undefined
  blogs : Blog[] =[]
  
  constructor(private fb:FormBuilder, private blogService: BlogService ){
    this.blogForm = this.fb.group({
      title: blogService.selectedBlog.title,
      description: blogService.selectedBlog.description,
      author: blogService.selectedBlog.author,
      comments: this.fb.array(blogService.selectedBlog.comments)
    }),
    this.comments =  this.blogForm.controls['comments']  as FormArray
  }

  ngOnInit(): void {
    this.getAllBlog()
  }

  getAllBlog(){
    this.sub = this.blogService.findAllBlogs().subscribe(data => this.blogs = data as Blog[])
  }


  onSubmit = () => {
    
    this.getAllBlog()
    
    let blog = this.blogs?.find((u) => u.id === this.blogService.selectedBlog.id)
    let length = this.blogs.length
    let selectedId = this.blogService.selectedBlog.id

    if(selectedId === '0' && length !== 0){
      let lastId = ((this.blogs[length - 1].id as unknown) as number)
      let nextId = (+ lastId + 1)
      selectedId = (nextId  as unknown) as string
    } else if(selectedId === '0' && length === 0){
      selectedId = '1'
    }
    
    let updatedBlog = {
      id: (selectedId as string) + '',
      title: this.blogForm.value.title,
      description: this.blogForm.value.description,
      author: this.blogForm.value.author,
      comments: this.comments.value
    }

    if(blog){
      this.sub = this.blogService.updateBlog(updatedBlog).subscribe(() => this.getAllBlog())
    } else {this.sub = this.blogService.createBlog(updatedBlog).subscribe(() => this.getAllBlog())}
      
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe
  }
}

