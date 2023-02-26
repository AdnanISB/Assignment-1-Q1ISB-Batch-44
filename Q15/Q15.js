var guests = ['Albert Einstein', 'Marie Curie', 'Nikola Tesla'];
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nI would like to invite you to a dinner at my place on Saturday. It would be an honor to have you as my guest. Please let me know if you can make it.\nBest regards,\n[Your Name]"));
}
console.log("".concat(guests[0], ", cant make it to dinner"));
// modify list
var newGuestslist = guests.slice(1);
newGuestslist.push("David Miller"); //replacement
// new updated list
for (var j = 0; j < newGuestslist.length; j++) {
    console.log("Dear ".concat(newGuestslist[j], " ,\nI would like to invite you to a dinner at my place on Saturday. It would be an honor to have you as my guest. Please let me know if you can make it.\nBest regards,\n[Your Name]"));
}
