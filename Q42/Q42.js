var magicians = ["David Copperfield", "Penn & Teller", "Criss Angel", "Harry Houdini", "Shin Lim"];
function show_magicians(magicians) {
    make_great(magicians);
}
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        console.log("The Great ".concat(magicians[i]));
    }
}
show_magicians(magicians);
