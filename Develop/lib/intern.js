const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name,id,email,school, title){
        super(name,id,email,title)
        this.school = school;

    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }
}

// Export intern class in order to be used in other files.
module.exports = Intern;