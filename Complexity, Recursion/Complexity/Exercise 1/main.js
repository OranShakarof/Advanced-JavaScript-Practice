
displayCustomers();

function displayCustomers() {

    const customers = new Map ();
    const customer1 = {id: "323818971", firstName: "Oran", lastName: "Shakarov"};
    const customer2 = {id: "232181179", firstName: "Avi", lastName: "Ron"};
    const customer3 = {id: "028315648", firstName: "Eli", lastName: "Kopter"};
    const customer4 = {id: "034869413", firstName: "Amit", lastName: "Hangel"};
    const customer5 = {id: "023458796", firstName: "Bart", lastName: "Simpson"};

    customers.set(customer1.id,customer1);
    customers.set(customer2.id,customer2);
    customers.set(customer3.id,customer3);
    customers.set(customer4.id,customer4);
    customers.set(customer5.id,customer5);

    for(const key of customers.keys()) {
        document.write(key + "<br>");
    }
    document.write("<hr>");
    
    for(const value of customers.values()){
        document.write(`ID: ${value.id}, First Name: ${value.firstName}, Last Name: ${value.lastName} <br>`);
    }
    
    document.write("<hr>");
    const id = prompt("Enter Customer ID");
    
    //O(1)
    if(customers.has(id)) {
        const customer = customers.get(id);
        document.write(`ID: ${customer.id}, First Name: ${customer.firstName}, Last Name: ${customer.lastName} <br>`);
    }
    else{
        document.write(`ID: ${id} Not Found`);
    }
}