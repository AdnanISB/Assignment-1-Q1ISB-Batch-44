var personName = "Eric John";
console.log(personName.toLowerCase()); //eric john
console.log(personName.toUpperCase()); //ERIC John
var titlecaseName = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase(); // convert to titlecase
console.log(titlecaseName); // print the name in titlecase
