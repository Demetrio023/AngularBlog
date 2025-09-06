import { Component,Input,OnInit } from '@angular/core';

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


  constructor() { }
  
  ngOnInit(): void {
    
  }
}
