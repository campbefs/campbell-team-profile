const inquirer = require("inquirer");

class Employee {
  constructor(name = '', id = 0, email = '') {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Employee';
  }

  getName() {
    return inquirer
      .prompt(
        {
          type: 'text',
          name: 'name',
          message: `What is the ${this.role}'s name?`
        }
      )
      .then( name => {
        // this.getId();
        this.name = name;
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
          // this.getEmail();
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
          // this.getRole();
          this.email = email;
        })
  };

  getRole() {
    return this.role;
  }

  addEmployee() {
    return inquirer
      .prompt({
        type: 'list',
        name: 'addEmployee',
        message: `Would you like to add an employee?`,
        choices: ['Engineer', 'Intern', 'No more employees']
      })
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
          message: `What is the ${this.role} ID?`,
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
          message: `What is the ${this.role} email?`,
          validate: email => {
            if (email.includes('@')) {
              return true;
            } else {
              console.log('Please enter a valid email!');
              return false;
            }
          }
        },

        // {
        //   type: 'number',
        //   name: 'officeNumber',
        //   message: `What is the office number?`,
        //   validate: officeNumber => {
        //     if (!isNaN(officeNumber)) {
        //       return true;
        //     } else {
        //       console.log(' Enter a number!');
        //       return false;
        //     }
        //   }
        // }

      ]);
  };

}

module.exports = Employee;