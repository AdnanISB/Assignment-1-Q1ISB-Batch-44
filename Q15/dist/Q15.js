var guests = ['Albert Einstein', 'Marie Curie', 'Nikola Tesla'];
// Print the original guest list
console.log("Original guest list:");
for (var i = 0; i < guests.length; i++) {
    console.log(guests[i]);
}
// One of the guests can't make it to the dinner
var unableToAttend = guests.indexOf("Bob");
guests.splice(unableToAttend, 1);
// Add a new guest to the list
guests.push("David");
// Print the updated guest list
console.log("Updated guest list:");
for (var i = 0; i < guests.length; i++) {
    console.log(guests[i]);
}
