import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [],
  templateUrl: './big-card.html',
  styleUrl: './big-card.css'
})
export class BigCard  implements OnInit{
  
  
  @Input()
  photoCover: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  author: string = 'Marvel Studios';
  @Input()
  publishedDate: string = '';
  @Input()
  readTime: string = '5 min';
  @Input()
  articleId: number = 1;


  constructor(private router: Router) { }
  
  ngOnInit(): void {
    
  }

  // Method to format date
  getFormattedDate(): string {
    if (!this.publishedDate) return '';
    const date = new Date(this.publishedDate);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  }

  // Navigate to article page
  navigateToArticle(): void {
    this.router.navigate(['/article', this.articleId]);
  }
}
