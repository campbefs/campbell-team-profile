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

  promptOffice() {
    return inquirer
      .prompt(
        {
          type: 'number',
          name: 'officeNumber',
          message: `What is the ${this.role}'s Office Number?`,
          validate: id => {
            if (!isNaN(id)) {
              // console.log(isNaN(id));
              return true;
            } else {
              console.log(' Enter a number!');
              return false;
            }
          }
        }
      );
  }

}

module.exports = Manager;