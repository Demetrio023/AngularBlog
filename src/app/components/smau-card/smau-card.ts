import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-smau-card',
  imports: [],
  templateUrl: './smau-card.html',
  styleUrl: './smau-card.css'
})
export class SmauCard implements OnInit{
  ngOnInit(): void {
    
  }

  @Input()
  photoCover: string = '';
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  category: string = '';
  @Input()
  readTime: string = '3 min';
  @Input()
  articleId: number = 1;

  constructor(private router: Router) {}

  // Navigate to article page
  navigateToArticle(): void {
    this.router.navigate(['/article', this.articleId]);
  }
}
