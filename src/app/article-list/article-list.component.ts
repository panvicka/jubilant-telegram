import { SharedService } from './../shared.service';
import { ArticleService } from './../article.service';
import { Article } from './../article';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];

  constructor(
    private ArticleService: ArticleService,
    private titleService: Title, //for meta tags for google search also on google chrome tab 
    private SharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.SharedService.blogTitle}`); //what you will see on the chrome tab 
    this.getArticles();

  }

  getArticles(): void {
    this.ArticleService
      .getArticles()
      .subscribe(articles => (this.articles = articles));
  }

}
