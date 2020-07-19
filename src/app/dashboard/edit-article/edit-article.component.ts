import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/article';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})
export class EditArticleComponent implements OnInit {

  article: Article = null;


  constructor(
    private dasboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const key: string = params.key;
      this.getArticle(key);

    });
  }


  getArticle(key: string): void {
    this.dasboardService.getArticle(key).subscribe(
      (article: Article) => {
        if (article === null) {
          this.router.navigateByUrl("404");
          return;
        }
        this.article = article;
      });
  }
}
