// make album 
function make_album(artist, title) {
    var album = { artist: artist, title: title };
    return album;
}
var album1 = make_album("Taylor Swift", "Folklore");
var album2 = make_album("Beyonce", "Lemonade");
var album3 = make_album("Ed Sheeran", "÷");
console.log(album1);
console.log(album2);
console.log(album3);
//adding optional parameter
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album['tracks'] = tracks;
    }
    return album;
}
var album1 = make_album("Taylor Swift", "Folklore");
var album2 = make_album("Beyonce", "Lemonade", 12);
var album3 = make_album("Ed Sheeran", "÷", 16);
console.log(album1);
console.log(album2);
console.log(album3);
