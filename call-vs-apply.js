const normalPerson = {
    firstName: "Sadman",
    lastName: "Sakin",
    salary: 15000,
    getFullname: function() {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax) {
        this.salary = this.salary - amount - tips - tax;
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

// jokon call method use korbo tokon comma diye diye arguments gulo pathate hobe.... c for call like c for comma

// normalPerson.chargeBill.call(friendlyPerson, 9000, 100, 50);
// normalPerson.chargeBill.call(friendlyPerson, 6000, 240, 60);

// normalPerson.chargeBill.call(heroPerson, 1500, 300, 50);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);

// apply 
// apply method use korle tokon array diye arguments gulo pathate hobe...... A for apply like a for array
// mainly call & apply same kaj kore
normalPerson.chargeBill.apply(heroPerson, [3000, 250, 100]);