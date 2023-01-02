/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
import CarCard from "./CarCard.js";

const ENDPOINT = 'cars.json';

let displayCars = async()=>{
   let data = await fetch(ENDPOINT)
      .then(res=>res.json())
      .then(data=>data);
   
   data.forEach(entry=>{
      new CarCard({brand: entry.brand, modelsArray: entry.models}).render();
   })
}
displayCars();