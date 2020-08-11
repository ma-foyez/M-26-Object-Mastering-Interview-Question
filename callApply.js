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
console.log("His current salary is : ", normalPerson.salary);
console.log(normalPerson);