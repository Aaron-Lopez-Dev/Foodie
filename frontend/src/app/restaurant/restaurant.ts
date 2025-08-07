import { Component} from '@angular/core';
import { fetchData, loading, unfilteredData} from '../utils/fetchData';
import { CommonModule } from '@angular/common';
import { newFilter } from '../utils/filterData';
import { selectedCuisine } from '../filter/filter';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant.html',
  styleUrls: ['./restaurant.css'],
})
export class RestaurantComponent {
  FoodTruck = 'Food_Truck';
  restaurant = 'Restaurant';
  bar = 'Bar';
  loading = loading;
  Data = unfilteredData;

  constructor() {
      fetchData();
}
}
