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
  saved = false;
  isNew = false;


  constructor(
    private dasboardService: DashboardService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const key: string = params.key;

      if (key !== "new") {
        this.getArticle(key);
      } else {
        this.article = new Article();
        this.article.published = false;
        this.isNew = true;
      }



     

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


  updateArticle(): void {
    this.saved = false;

    this.dasboardService.updateArticle(this.article).subscribe(result => {
      this.article = result;
      this.saved = true;
    })
  }

  viewPreview(): void {
    this.router.navigateByUrl("dashboard/preview/" + this.article.key);
  }


  deleteArticle(): void {
    this.saved = false;

    const deletionConfirmed = confirm(`Deleting '${this.article.title}'. Are you sure?`);
    if (deletionConfirmed) {
      this.dasboardService.deleteArticle(this.article.id).subscribe(
        () => {
          this.router.navigateByUrl("dashboard");
        },
        error => alert(error.message)
      );
    }
  }

  createArticle(): void {
    this.saved = false;
    this.dasboardService.createArticle(this.article).subscribe(result => {
      this.article = result;
      this.saved = true;
      this.isNew = false;
    });
  }


}



