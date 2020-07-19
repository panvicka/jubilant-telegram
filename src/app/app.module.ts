import { FormsModule } from '@angular/forms';
import { DashboardService } from './dashboard/dashboard.service';
import { EditArticleComponent } from './dashboard/edit-article/edit-article.component';
import { ArticleOverviewComponent } from './dashboard/article-overview/article-overview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    ArticleListComponent,
    AboutComponent,
    ArticleComponent,
    NotFoundComponent,
    DashboardComponent,
    ArticleOverviewComponent,
    EditArticleComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
