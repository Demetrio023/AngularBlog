import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Title } from "./components/title/title";
import { MenuBar } from "./components/menu-bar/menu-bar";
import { BigCard } from "./components/big-card/big-card";
import { SmauCard } from "./components/smau-card/smau-card";


  
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Title, MenuBar, BigCard, SmauCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('AngularBlog');
}
