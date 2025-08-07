import { Component, signal, effect} from '@angular/core';
import { unfilteredData, filterCuisineType, filterVenueType } from '../utils/fetchData';

export const selectedType = signal<string | null>(null);
export const selectedCuisine = signal<string| null>(null);

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
  selectedType = signal<string | null>(null);
  selectedCuisine = signal<string| null>(null);
 
  constructor(){
    effect(()=>{
    console.log(this.selectedType())
    console.log(this.selectedCuisine())
  })
}
}