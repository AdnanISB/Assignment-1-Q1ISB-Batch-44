// define the array of places to visit
let places: string[] = ['Turkey', 'Australia', 'Italy', 'Canada', 'Dubai'];

// print the original order of array
console.log("Original Order:", places);

// print the array in alphabetical order without modifying the original array
let sortedalpha = places.slice().sort();
console.log("Alphabetical order:", sortedalpha);

// show that the original array is still in its original order
console.log("Original Order:", places);

// print the array in reverse alphabetical order without modifying the original array
let sortedreverse = sortedalpha.slice().reverse();
console.log("Reverse Alphabetical:", sortedreverse);

// show that the original array is still in its original order
console.log("Original Order:", places);

// reverse the order of the original array and print it
places.reverse();
console.log("Reversed Order:", places);

// reverse the order of the original array again to get it back to its original order and print it
places.reverse();
console.log("Original Order:", places);

// sort the array in alphabetical order and print it
places.sort();
console.log("Alphabetical Order:", places);

// sort the array in reverse alphabetical order and print it
places.reverse();
console.log("Reverse Alphabetical Order:", places);