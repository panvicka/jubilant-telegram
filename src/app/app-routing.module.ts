import { EditArticleComponent } from './dashboard/edit-article/edit-article.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  { path: 'articles', component: ArticleListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:key', component: EditArticleComponent },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', component: ArticleListComponent },
  { path: ':key', component: ArticleComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
