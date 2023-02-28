var usernames = ["Admin", "Eric", "John", "Tom", "Simon"];
if (usernames.length == 0) {
    console.log("We need to find some users");
}
else {
    usernames.splice(0);
    console.log("We need to find some users", usernames);
}
