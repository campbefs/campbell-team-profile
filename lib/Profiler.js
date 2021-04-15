
const Manager = require('./Manager');
const Employee = require('./Employee');
const inquirer = require("inquirer");

class Profiler {
  constructor() {
    this.manager = [];
    this.employee = [];
    this.engineer = [];
    this.intern = [];
  }

  // getData() {
  //   new Promise((resolve, reject) => {
  //   })
  //   .then( )
  // }

  getData() {
    inquirer
      .prompt({
        type: 'text',
        name: 'none',
        message: `Please enter Team Manager info. Please enter to continue`;
      })
      .then(() => {
        this.manager.push(Manager.getName());
      })
  }


  // getData() {
  //   inquirer
  //     .prompt([
  //       {
  //         type: 'text',
  //         name: 'name',
  //         message: `What is the team manager's name?`
  //       },

  //       {
  //         type: 'number',
  //         name: 'id',
  //         message: `What is the team manager's ID?`,
  //         validate: id => {
  //           if (!isNaN(id)) {
  //             // console.log(isNaN(id));
  //             return true;
  //           } else {
  //             console.log(' Enter a number!');
  //             return false;
  //           }
  //         }
  //       },

  //       {
  //         type: 'text',
  //         name: 'email',
  //         message: `What is the team manager's email?`,
  //         validate: email => {
  //           if (email.includes('@')) {
  //             return true;
  //           } else {
  //             console.log('Please enter a valid email!');
  //             return false;
  //           }
  //         }
  //       },

  //       {
  //         type: 'number',
  //         name: 'officeNumber',
  //         message: `What is the office number?`,
  //         validate: officeNumber => {
  //           if (!isNaN(officeNumber)) {
  //             return true;
  //           } else {
  //             console.log(' Enter a number!');
  //             return false;
  //           }
  //         }
  //       }

  //     ])
  //     .then( managerData => {
  //       this.manager.push(new Manager(managerData['name'], 
  //         managerData['id'], managerData['email'], managerData['officeNumber']));
        
  //       console.log(this.manager);
  //     })
  //     .then( () => {
  //       this.employee.push()
  //     })
      
  // };




}

module.exports = Profiler;