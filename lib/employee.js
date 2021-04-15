const inquirer = require("inquirer");

class Employee {
  constructor(name = '', id = 0, email = '') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

  getName() {
    inquirer
      .prompt(
        {
          type: 'text',
          name: 'name',
          message: `What is the ${this.role}'s name?`
        }
      )
      .then( name => {
        return this.name = name;
      });
  };

  getId() {
    inquirer
      .prompt(
        {
          type: 'number',
          name: 'id',
          message: `What is the ${this.role}'s ID?`,
          validate: id => {
            if (!isNaN(id)) {
              return true;
            } else {
              console.log(' Enter a number!');
              return false;
            }
          }
        }
      )
        .then( id => {
          return this.id = id;
        })
  };

  getEmail() {
    inquirer
      .prompt(
        {
          type: 'text',
          name: 'email',
          message: `What is the ${this.role}'s email?`,
          validate: email => {
            if (email.includes('@')) {
              return true;
            } else {
              console.log('Please enter a valid email!');
              return false;
            }
          }
        }
      )
        .then( email => {
          return this.email = email;
        })
  };

  getRole() {
    return this.role;
  }

}

module.exports = Employee;