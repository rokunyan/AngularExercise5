import { ResolveFn } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { inject } from '@angular/core';


export const blogResolver: ResolveFn<boolean> = (route, state) => {
  return inject(BlogService).findAllBlogs()
};
