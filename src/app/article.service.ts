import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Article } from './article';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

 
  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(environment.apiUrl + "/articles");
  }

  getArticle(key: string): Observable<Article> {
    return this.http.get<Article>(environment.apiUrl + "/articles/" + key);
  }

}
