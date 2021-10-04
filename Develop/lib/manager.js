const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email,title);
        this.officeNumber = officeNumber;
        
    }
    getRole() { return 'Manager'}
}
module.exports = Manager;