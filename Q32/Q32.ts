let current_users : string []= ["Alex","Simon","Jack","Tom","David"];
let new_users : string []= ["ALEX","Simon","Jason","Nikki","Sam"];
for (let i=0;i<current_users.length;i++){
    for (let j=0;j<new_users.length;j++){
        if(new_users[j]==current_users[i]){
            console.log("The person will need to enter new username");
        }else{
            console.log("Username is available");
        }
    }
}