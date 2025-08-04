import { Component, signal } from '@angular/core';
import { supabase } from '../supabase.client';
import { CommonModule } from '@angular/common';

type restaurant = {id: string, name: string; address: string; class:string; cuisine: string };

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule],                    
  templateUrl: './restaurant.html',
  styleUrls: ['./restaurant.css']
})

export class RestaurantComponent {
  FoodTruck = "FoodTruck"
  restaurant = "Restaurant"
  bar = "Bar"
  restaurants = signal<restaurant[]>([]);
  loading = signal(false);
  error = signal<string | null>(null);

  constructor() {
    this.load();
  }

  async load() {
    this.loading.set(true);
    this.error.set(null);

    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .select('id,name,address,class,cuisine')

    if (error) {
      this.error.set(error.message);
    } else {
      this.restaurants.set(data ?? []);
    }

    this.loading.set(false);
  }


}
