
const Manager = require('./Manager');
const Employee = require('./Employee');
const inquirer = require("inquirer");

class Profiler {
  constructor() {
    this.manager = Object();
    this.employeeArr = [];
    this.engineerArr = [];
    this.internArr = [];
  }

  // getData() {
  //   new Promise((resolve, reject) => {
  //   })
  //   .then( )
  // }

  // async getData() {
  //   const manager = new Manager();

  //   ;
  // }

  // getMgrData() {
  //   inquirer
  //     .prompt({
  //       type: 'text',
  //       name: 'none',
  //       message: `Team Manager info. Please enter to continue`
  //     })
  //     .then( () => {
  //       this.manager = new Manager();
  //     })
  //     .then( () => {
  //       this.manager.getName();
  //       return this.manager;
  //     });
    // console.log(this.manager);


  getData() {
    const manager = new Manager();    
    manager.promptUser()
      .then( managerData => {
        manager.name = managerData['name'];
        manager.id = managerData['id'];
        manager.email = managerData['email'];

        // nested callback for manager's office number
        manager.promptOffice()
          .then( managerData => {
            manager.officeNumber = managerData['officeNumber'];
            this.manager = manager;
            console.log(manager);

            // call the 'add employee' function
            this.getEmployeeData();

          })
        })
  }

  getEmployeeData() {
    const employee = new Employee();    
    employee.promptUser()
      .then( employeeData => {
        employee.name = employeeData['name'];
        employee.id = employeeData['id'];
        employee.email = employeeData['email'];

          })
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