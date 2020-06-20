import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  blogTitle = "the blog";
  baseUrl = "http://localhost:4200/";

  constructor() { }
}
