import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../services/blog.service';
import { Article } from '../models/article.model';
import { MenuBar } from "../components/menu-bar/menu-bar";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article',
  imports: [MenuBar, CommonModule],
  template: `
    <app-menu-bar></app-menu-bar>
    
    @if (article) {
      <div class="article-container">
        <div class="article-header">
          <div class="article-meta">
            <span class="category">{{ article.category }}</span>
            <span class="separator">•</span>
            <span class="date">{{ getFormattedDate(article.publishedDate) }}</span>
            <span class="separator">•</span>
            <span class="read-time">{{ article.readTime }}</span>
          </div>
          <h1 class="article-title">{{ article.title }}</h1>
          <p class="article-author">Por {{ article.author }}</p>
        </div>
        
        <div class="article-image">
          <img [src]="article.photoCover" [alt]="article.title">
        </div>
        
        <div class="article-content">
          <p class="article-description">{{ article.description }}</p>
          
          <div class="article-body">
            <p>Este é o conteúdo completo do artigo sobre {{ article.title }}.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          
          @if (article.tags && article.tags.length > 0) {
            <div class="article-tags">
              <h3>Tags:</h3>
              <div class="tags-list">
                @for (tag of article.tags; track tag) {
                  <span class="tag">{{ tag }}</span>
                }
              </div>
            </div>
          }
        </div>
        
        <div class="article-actions">
          <button (click)="goBack()" class="back-button">
            ← Voltar para Home
          </button>
        </div>
      </div>
    } @else {
      <div class="error-container">
        <h2>Artigo não encontrado</h2>
        <p>O artigo solicitado não existe.</p>
        <button (click)="goBack()" class="back-button">
          ← Voltar para Home
        </button>
      </div>
    }
  `,
  styles: [`
    .article-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      color: white;
    }
    
    .article-header {
      margin-bottom: 30px;
    }
    
    .article-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 15px;
      font-size: 14px;
      color: rgb(160, 160, 160);
    }
    
    .category {
      color: #007ACC;
      font-weight: 500;
      text-transform: uppercase;
    }
    
    .article-title {
      font-size: 42px;
      line-height: 1.2;
      margin: 0 0 10px 0;
      font-weight: bold;
    }
    
    .article-author {
      color: rgb(160, 160, 160);
      font-size: 16px;
      margin: 0;
    }
    
    .article-image {
      margin: 30px 0;
      border-radius: 12px;
      overflow: hidden;
    }
    
    .article-image img {
      width: 100%;
      height: 400px;
      object-fit: cover;
    }
    
    .article-content {
      line-height: 1.6;
    }
    
    .article-description {
      font-size: 20px;
      color: rgb(200, 200, 200);
      margin-bottom: 30px;
      font-weight: 500;
    }
    
    .article-body p {
      margin-bottom: 20px;
      font-size: 16px;
      color: rgb(180, 180, 180);
    }
    
    .article-tags {
      margin: 40px 0;
      padding: 20px;
      background: rgba(25, 25, 25, 0.5);
      border-radius: 8px;
    }
    
    .article-tags h3 {
      margin: 0 0 15px 0;
      color: white;
    }
    
    .tags-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .tag {
      background: #007ACC;
      color: white;
      padding: 5px 12px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .article-actions {
      margin: 40px 0;
      text-align: center;
    }
    
    .back-button {
      background: #007ACC;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.3s ease;
    }
    
    .back-button:hover {
      background: #005999;
    }
    
    .error-container {
      max-width: 600px;
      margin: 50px auto;
      padding: 40px 20px;
      text-align: center;
      color: white;
    }
    
    .error-container h2 {
      color: #ff6b6b;
      margin-bottom: 20px;
    }
    
    @media (max-width: 768px) {
      .article-container {
        padding: 15px;
      }
      
      .article-title {
        font-size: 32px;
      }
      
      .article-image img {
        height: 250px;
      }
      
      .article-description {
        font-size: 18px;
      }
    }
  `]
})
export class ArticleComponent implements OnInit {
  article: Article | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.article = this.blogService.getArticleById(id);
    }
  }

  getFormattedDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }

  goBack() {
    this.router.navigate(['/']);
  }
}