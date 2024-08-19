import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from '../../services/blog.service';
import { Subscription } from 'rxjs';
import { Router} from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnDestroy, OnInit{
  blogs : Blog[] | undefined;
  sub: Subscription | undefined

  constructor(private blogService : BlogService, private router : Router ){
    this.sub = this.blogService.findAllBlogs().subscribe(data => this.blogs = data as Blog[])
  }

  ngOnInit(): void {
    this.getAllBlog()
  }

  getAllBlog(){
    this.blogService.findAllBlogs().subscribe(data => this.blogs = data as Blog[])
  }

  edit = (id : string) =>{
    let blog = this.blogs?.filter((data) => data.id === id)[0]
    let length = (this.blogs?.length)?? 0
    if(blog){
      this.blogService.setSelectedBlog(blog)
    }else if(this.blogs && length > 0){
      console.log("pumasok dito")
      let finalBlog = this.blogs[length - 1]
      let nextId = (+ finalBlog.id as unknown as number) + 1
      this.blogService.setSelectedBlog({id: ((nextId as unknown) as string)+'', author: '', title : '',description:'', comments:['']})
    } else{
      console.log("san pumunta")
      this.blogService.setSelectedBlog({id: '1', author: '', title : '',description:'', comments:['']})
    }

  }
  delete = (id : string) =>{
    this.sub = this.blogService.deleteBlog(id).subscribe(() => this.getAllBlog())
  }

  call = (input: string) => {
    if(input === 'edit'){
      this.edit('0');
    }else {
      this.blogs?.forEach((data) => this.delete(data.id))
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe
  }

}
