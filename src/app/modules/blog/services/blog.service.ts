import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private serviceURL = 'http://localhost:3000/blogs'

  constructor(private http : HttpClient){}

 //reading blogs from json db

  findAllBlogs = () => { 
    return this.http.get<any>(this.serviceURL)
    .pipe(tap((x) => x))
  }

  selectedBlog : Blog = {
    id: '0' ,
    title: '',
    description: '',
    author: '',
    comments: ['']
  }
  
  setSelectedBlog = (blog : Blog) => {
    this.selectedBlog = blog
  }

  createBlog = (blog : Blog) => {
    return this.http.post(this.serviceURL, blog).pipe()
  }

  updateBlog = (blog : Blog) => {
    return this.http.put(`${this.serviceURL}/${blog.id}`, blog).pipe()
  }

  deleteBlog = (id: any) => {
    return this.http.delete(`${this.serviceURL}/${id}`).pipe()
  }
}
