// Calling function for Karachi
describe_city("Karachi");
// Calling function for Lahore
describe_city("Lahore");
// Calling function for any other city
describe_city("Istanbul","Turkey");

// function definition
function describe_city( City:string , Country:string = "Pakistan"){
    console.log(`${City} is in ${Country}`);
}