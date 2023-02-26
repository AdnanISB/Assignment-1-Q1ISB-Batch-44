let usernames : string [] = ["Admin", "Eric", "John","Tom", "Simon"];
for (let i=0; i<usernames.length; i++){
   if (usernames[i]=="Admin"){
    console.log("Hello Admin, would you like to see the status report");
   }else{
        console.log(`Hello ${usernames[i]}, thankyou for logging in again`);
   }
}