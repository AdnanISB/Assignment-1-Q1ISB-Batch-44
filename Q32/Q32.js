var current_users = ["Alex", "Simon", "Jack", "Tom", "David"];
var new_users = ["ALEX", "Simon", "Jason", "Nikki", "Sam"];
for (var i = 0; i < current_users.length; i++) {
    for (var j = 0; j < new_users.length; j++) {
        if (new_users[j] == current_users[i]) {
            console.log("The person will need to enter new username");
        }
        else {
            console.log("Username is available");
        }
    }
}
