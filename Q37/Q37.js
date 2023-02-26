// Calling function for Large size
make_shirt();
// Calling function for Medium size
make_shirt("medium");
// Calling function for any other size
make_shirt("small", "Typescript is amazing");
// function definition
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("The shirt is a ".concat(size, " size and it has ").concat(message, " printed on it"));
}
