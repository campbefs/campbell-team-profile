const inquirer = require("inquirer");

class Manager {
  constructor(name='', email='') {
    this.name = name;
    this.id = 0;
    this.email = email; // blank
    this.officeNumber = 0;
  }

  // getMgrData() {
  //   inquirer
  //     .prompt({
  //       type: 'text',
  //       name: 'name',
  //       message: `What is your team manager's name?`
  //     })
  //     .then(({ name }) => {
  //       this.name = name;
  //     });
  // };

  // getName() {
  //   return this.name;
  // }

  // getEmail() {
  //   return this.email;
  // }

  // getRole() {
  //   return 'Manager';
  // }

}

module.exports = Manager;