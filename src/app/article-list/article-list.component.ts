import { ArticleService } from './../article.service';
import { ARTICLES } from './../mock-articles';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(private ArticleService: ArticleService) { }

  ngOnInit(): void {
this.getArticles();

  }

  getArticles(): void {
    this.ArticleService
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }

}
