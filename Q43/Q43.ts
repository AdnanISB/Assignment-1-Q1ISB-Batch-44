let magicians : string[]=["David Copperfield","Penn & Teller","Criss Angel","Harry Houdini","Shin Lim"];
let copy_magicians =magicians.slice();

function show_magicians (magicians : string[]):void {
        
    for (let i=0; i<magicians.length;i++){
        console.log(magicians[i]);
    }   
    make_great(copy_magicians);
}
function make_great (copy_magicians : string[]):void {
    for (let i=0; i<copy_magicians.length;i++){
        console.log(`The Great ${copy_magicians[i]}`);
    }
}
show_magicians(magicians);