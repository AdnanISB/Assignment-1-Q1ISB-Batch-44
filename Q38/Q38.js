// Calling function for Karachi
describe_city("Karachi");
// Calling function for Lahore
describe_city("Lahore");
// Calling function for any other city
describe_city("Istanbul", "Turkey");
// function definition
function describe_city(City, Country) {
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("".concat(City, " is in ").concat(Country));
}
