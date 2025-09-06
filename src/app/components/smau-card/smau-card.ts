import { Component, Input, OnInit } from '@angular/core';

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

}
