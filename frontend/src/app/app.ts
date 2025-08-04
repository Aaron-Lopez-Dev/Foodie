import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RestaurantComponent, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
