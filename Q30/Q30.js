var usernames = ["Admin", "Eric", "John", "Tom", "Simon"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] == "Admin") {
        console.log("Hello Admin, would you like to see the status report");
    }
    else {
        console.log("Hello ".concat(usernames[i], ", thankyou for logging in again"));
    }
}
