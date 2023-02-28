var magicians = ["David Copperfield", "Penn & Teller", "Criss Angel", "Harry Houdini", "Shin Lim"];
var copy_magicians = magicians.slice();
function show_magicians(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
    make_great(copy_magicians);
}
function make_great(copy_magicians) {
    for (var i = 0; i < copy_magicians.length; i++) {
        console.log("The Great ".concat(copy_magicians[i]));
    }
}
show_magicians(magicians);
