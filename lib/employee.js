const inquirer = require("inquirer");

class Employee {
  constructor(name = '', id = 0, email = '') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
    this.promptUser = this.promptUser.bind(this);
  }

  promptUser() {
    return inquirer
      .prompt([
        {
          type: 'text',
          name: 'name',
          message: `What is the ${this.role}'s name?`
        },

        {
          type: 'number',
          name: 'id',
          message: `What is the ${this.role}'s ID?`,
          validate: id => {
            if (!isNaN(id)) {
              // console.log(isNaN(id));
              return true;
            } else {
              console.log(' Enter a number!');
              return false;
            }
          }
        },

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
        },

      ]);
  };

}

module.exports = Employee;