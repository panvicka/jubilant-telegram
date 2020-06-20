import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Article } from './article';
import { ARTICLES } from './mock-articles';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }


  getArticles(): Observable<Article[]> {
    const articles: Article[] = ARTICLES;
    return of(articles);
  }

  getArticle(key: string): Observable<Article> {

    const articles: Article[] = ARTICLES.filter(a => a.key == key);
    return of(articles[0]);

  }

}
