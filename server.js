const express = require("express");
const faker = require("faker");
const app = express();

const port = 8000;

class User {
    constructor() {
        this.idcard = faker.internet.ip();
        this.firstName = faker.name.findName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
console.log(new User());

class Company {
    constructor() {
        this.idcard = faker.internet.ip();
        this.name = faker.company.companyName();
        this.address = [faker.address.streetAddress(), faker.address.city(), faker.address.state(), faker.address.zipCode(), faker.address.country()]
}
}
console.log(new Company());

app.get("/api/user/new", (req, res) => {
    res.json({ user: new User });
});

app.get("/api/companies/new", (req, res) => {
    res.json({ Company: new Company });
});

app.get("/api/user/company/", (req, res) => { 
    res.json({ user: new User, company: new Company })
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );