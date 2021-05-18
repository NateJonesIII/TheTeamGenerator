//Employee Method
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.cardText = "";
    }
    //returns name
    getName() {
        return this.name;
    }
    //returns id property
    getId() {
        return this.id;
    }
    //returns email property
    getEmail() {
        return this.email;
    }
    //returns role 
    getRole() {
        return "Employee";
    }

}

module.exports = Employee;

