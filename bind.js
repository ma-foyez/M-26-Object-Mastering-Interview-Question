const normalPerson = {
    firstName: "Sadman",
    lastName: "Sakin",
    salary: 15000,
    getFullname: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount) {
        this.salary = this.salary - amount;
        console.log(this);
    }
}
normalPerson.chargeBill(4280);
// console.log("His current salary is : ", normalPerson.salary);
// console.log(normalPerson);



const friendlyPerson = {
    firstName: "Shariar",
    lastName: "Rajputh",
    salary: 45000
}

const heroPerson = {
    firstName: "Jhankar",
    lastName: "Mahbub",
    salary: 25000
}

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);

heroChargeBill(5000);
// heroChargeBill(2000);
console.log(normalPerson.salary);