displayFlattenObject();

function displayFlattenObject(){
    const customer = {
        firstName: "Amit",
        lastName: "Hangel",
        id: "023456897",
        address: {
            city: "Holon",
            street: "Jabutinsky",
            zipcode: "583211",
        },
        phone: "0503030353",
        email: "AmitHangel@gmail.com",
    };
    displayCustomer(customer);
}

function displayCustomer (customer) {
    for(const prop in customer){
        if(typeof customer[prop] !== "object"){
            document.write(`${prop} : ${customer[prop]} <br>`);
        }
        else{
            displayCustomer(customer[prop]);
        }
    }
}

