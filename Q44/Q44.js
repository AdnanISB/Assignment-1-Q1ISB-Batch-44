function make_sandwich(items) {
    console.log("Making a sandwich");
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        console.log("-".concat(item));
    }
    console.log("Enjoy your sandwich");
}
make_sandwich(["turkey", "cheddar", "lettuce", "mayo"]);
make_sandwich(["peanut butter", "jelly"]);
make_sandwich(["ham", "swiss", "mustard", "pickle", "onion"]);
