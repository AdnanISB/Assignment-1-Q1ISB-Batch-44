function make_sandwich(items:string[]):void{
console.log("Making a sandwich");
for (let item of items){
    console.log(`-${item}`);
}
console.log("Enjoy your sandwich");
}
make_sandwich(["turkey", "cheddar", "lettuce", "mayo"]);
make_sandwich(["peanut butter", "jelly"]);
make_sandwich(["ham", "swiss", "mustard", "pickle", "onion"]);