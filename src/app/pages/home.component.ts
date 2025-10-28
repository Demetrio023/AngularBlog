import { Component } from '@angular/core';
import { Title } from "../components/title/title";
import { MenuBar } from "../components/menu-bar/menu-bar";
import { BigCard } from "../components/big-card/big-card";
import { SmauCard } from "../components/smau-card/smau-card";
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  imports: [Title, MenuBar, BigCard, SmauCard],
  template: `
    <app-menu-bar></app-menu-bar>
    <app-title></app-title>
    <div class="big-card">
      <app-big-card 
         [description]="blogService.getFeaturedArticle().description" 
         [title]="blogService.getFeaturedArticle().title" 
         [photoCover]="blogService.getFeaturedArticle().photoCover"
         [author]="blogService.getFeaturedArticle().author"
         [publishedDate]="blogService.getFeaturedArticle().publishedDate"
         [articleId]="blogService.getFeaturedArticle().id"></app-big-card>
      <div class="smau-1">
        @for (article of blogService.getArticles(); track article.id) {
          <app-smau-card 
            [title]="article.title"
            [photoCover]="article.photoCover"
            [description]="article.description"
            [category]="article.category"
            [readTime]="article.readTime || '3 min'"
            [articleId]="article.id"></app-smau-card>
          <hr>
        }
      </div>
    </div>
  `,
  styleUrls: ['../app.css']
})
export class HomeComponent {
  constructor(public blogService: BlogService) {}
}