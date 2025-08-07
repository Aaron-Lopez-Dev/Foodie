import { supabase } from '../supabase.client';
import { signal } from '@angular/core';
//import { filterData } from './filterData'

type restaurant = {
  id: string;
  name: string;
  address: string;
  class: string;
  cuisine: string;
};

const unfilteredData = signal<restaurant[]>([]);
const filteredData = signal<restaurant[]>([]);
const loading = signal(false);
const supabaseError = signal<string | null>(null);
const filterVenueType = signal<string[]>([])
const filterCuisineType = signal<string[]>([])

async function fetchData() {
  supabaseError.set(null);
  loading.set(true);

  const { data, error } = await supabase
    .from('restaurants')
    .select('*')
    .select('id,name,address,class,cuisine');

  if (error) {
    supabaseError.set(error.message);
  } else {
    unfilteredData.set(data ?? []);
    console.log(unfilteredData())
    let uniqueTypes = [...new Set(data.map(data => data.class))]
    let uniqueCuisine = [...new Set(data.map(data => data.cuisine))]

    uniqueTypes = uniqueTypes.map(uniqueTypes => uniqueTypes.replace(/[_]/g," "))
    uniqueCuisine = uniqueCuisine.map(uniqueCuisine => uniqueCuisine.replace(/[_]/g," "))

    filterVenueType.set(uniqueTypes)
    filterCuisineType.set(uniqueCuisine)

    //filteredData.set(filterData(unfilteredRestaurantData()))
  }
  loading.set(false);
}

export { fetchData, unfilteredData, filteredData, loading, supabaseError, filterVenueType, filterCuisineType };
