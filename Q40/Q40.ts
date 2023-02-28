// make album 
function make_album(artist: string, title: string): object {
    const album = { artist: artist, title: title };
    return album;
  }

const album1 = make_album("Taylor Swift", "Folklore");
const album2 = make_album("Beyonce", "Lemonade");
const album3 = make_album("Ed Sheeran", "÷");

console.log(album1);
console.log(album2);
console.log(album3);
//adding optional parameter
function make_album(artist: string, title: string, tracks?: number): object {
    const album = { artist: artist, title: title };
    if (tracks) {
      album['tracks'] = tracks;
    }
    return album;
  }
  const album1 = make_album("Taylor Swift", "Folklore");
const album2 = make_album("Beyonce", "Lemonade", 12);
const album3 = make_album("Ed Sheeran", "÷", 16);

console.log(album1);
console.log(album2);
console.log(album3);