
function getUserFormServer(callback){
    setTimeout (() => {
        const user = { firstName: "Moishe", lastName: "Ufnik"}
        callback(user);
    },4000);
};

getUserFormServer( user => console.log(`First Name: ${user.firstName} \nLast Name: ${user.lastName}`));
