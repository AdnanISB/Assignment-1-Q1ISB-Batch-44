// Calling function for Karachi
console.log(city_country("Karachi","Pakistan"));
// Calling function for Toronto
console.log(city_country("Toronto","Canada"));
// Calling function for Istanbul
console.log(city_country("Istanbul","Turkey"));

// function definition
function city_country( City:string , Country:string){
    return `${City}, ${Country}`;
}