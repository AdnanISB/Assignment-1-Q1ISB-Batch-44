let magicians : string[]=["David Copperfield","Penn & Teller","Criss Angel","Harry Houdini","Shin Lim"];

function show_magicians (magicians : string[]):void {
        make_great(magicians);
}
function make_great (magicians : string[]):void {
    for (let i=0; i<magicians.length;i++){
        console.log(`The Great ${magicians[i]}`);
    }
}


show_magicians(magicians);