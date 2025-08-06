import { Component, signal, effect } from '@angular/core';
import { unfilteredData, filterCuisineType, filterVenueType } from '../utils/fetchData';


@Component({
  selector: 'app-filter',
  imports: [],
  templateUrl: './filter.html',
  styleUrl: './filter.css'
})
export class Filter {
  data = unfilteredData
  type = filterVenueType;
  cuisine = filterCuisineType
  selectedVenue = signal<string | null>(null);
  selectedCuisine = signal<string[]| null>(null)

  filtereffect = effect(() => {

    console.log('Selected venue changed:', this.selectedVenue());
    console.log('Selected Cuisine Type: ', this.selectedCuisine())
  });


}
