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

  blogArray: Blog[] = []

  findAllBlogs = () => { 
    return this.http.get<any>(this.serviceURL)
    .pipe(tap((data) => this.blogArray = data))
  }

  defaultBlog : Blog = {id: this.blogArray.length + 1, title: '', description:'', author:'',comments:['']}
  selectedBlog = this.defaultBlog;

  setSelectedBlog = (id : number) => {
    this.selectedBlog = (this.blogArray.filter((data) => data.id === id))[0] ?? this.defaultBlog
  } 

  getBlogs = () => {
    return this.blogArray;
  }
}
