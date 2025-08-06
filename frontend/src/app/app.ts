import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RestaurantComponent } from './restaurant/restaurant';
import { Navbar } from './navbar/navbar';
import { Filter } from "./filter/filter";

@Component({
  selector: 'app-root',
  imports: [RestaurantComponent, Navbar, Filter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'frontend';
}
 