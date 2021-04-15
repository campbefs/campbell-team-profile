const inquirer = require("inquirer");
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name ='', id=0, email='', officeNumber=0) {
    super();

    this.name = name;
    this.id = id;
    this.email = email; // blank
    this.officeNumber = officeNumber;
    this.role = 'Manager';

  }

};

module.exports = Manager;