// We define function createCar and object inside it
function createCar(manufacturer, model) {
    var details = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        details[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    for (var i = 0; i < details.length; i + 2) {
        car[details[i]] = details[i + 1];
    }
    return car;
}
// Calling function to console
var myCar = ["Toyota", "Camry", "color", "blue", "year", 2011, "sunroof", true];
console.log(myCar);
