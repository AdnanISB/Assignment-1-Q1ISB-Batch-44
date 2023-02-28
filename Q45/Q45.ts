// Define an interface for car that shows properties about car object will have
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  // We define function createCar and object inside it
  function createCar(manufacturer: string, model: string, ...details: any[]): Car{
  const car: Car ={manufacturer, model};
  for (let i=0; i<details.length;i+2){
    car[details[i]]=details[i+1];
  }
return car;
}
// Calling function to console
let myCar = ["Toyota","Camry","color", "blue","year",2011,"sunroof",true];
console.log(myCar);
