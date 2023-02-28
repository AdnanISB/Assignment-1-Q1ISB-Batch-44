// Calling function for Large size
make_shirt();
// Calling function for Medium size
make_shirt("medium");
// Calling function for any other size
make_shirt("small" , "Typescript is amazing");

// function definition
function make_shirt(size:string = "large", message:string = "I love Typescript"){
    console.log(`The shirt is a ${size} size and it has ${message} printed on it`);
}