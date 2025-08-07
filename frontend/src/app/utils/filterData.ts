import { unfilteredData } from "./fetchData";
/* const data2 =
[
    {
        "id": "0fe78e6d-978d-49ae-8d81-5c09061c45a2",
        "name": "Aaron's Food Truck",
        "address": "123 Home St. Clermont, Fl 34711",
        "class": "Food_Truck",
        "cuisine": "Dominican"
    },
    {
        "id": "126840e8-28ee-4f68-a988-c09b4a4f5276",
        "name": "My Food Truck",
        "address": "123 Next St Clermont, Fl 34711",
        "class": "Restaurant",
        "cuisine": "Puerto_Rican"
    },
    {
        "id": "c325de6f-d00c-4045-be53-c34adcff4cb5",
        "name": "Best Food Truck",
        "address": "Your Mama's House",
        "class": "Food_Truck",
        "cuisine": "Venezuelan"
    }
];
 */
export function newFilter(objects:()=> any[], signal: () => any){

    let filteredObject = objects().filter((item:any) => item.cuisine == signal)
    console.log(filteredObject)
}



