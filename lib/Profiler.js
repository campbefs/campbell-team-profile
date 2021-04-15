
const Manager = require('./Manager');
const inquirer = require("inquirer");
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Profiler {
  constructor() {
    this.manager = Object();
    this.engineerArr = [];
    this.internArr = [];
  }


  getData() {
    const manager = new Manager();    
    return manager.promptUser()
      .then( managerData => {
        manager.name = managerData['name'];
        manager.id = managerData['id'];
        manager.email = managerData['email'];

        // nested callback for manager's office number
        manager.getOffice()
          .then( managerData => {
            manager.officeNumber = managerData['officeNumber'];
            this.manager = manager;
            // console.log(manager);

            this.addEmployeePrompts();

          })
        });
  }

  addEmployeePrompts() {
    // call the 'add employee' function -- turn into its own function
    this.addEmployee()
    .then( newEmployee => {
      if (newEmployee['addEmployee'] === 'Engineer') {
        // call eng prompts
        
        const engineer = new Engineer();    
        engineer.promptUser()
          .then( engineerData => {
            engineer.name = engineerData['name'];
            engineer.id = engineerData['id'];
            engineer.email = engineerData['email'];

            // nested engineer callback
            engineer.getGithub()
              .then( githubData => {
                engineer.github = githubData['github'];

                this.engineerArr.push(engineer);
                
                // Loop through the program again
                this.addEmployeePrompts();
              })
          });

      } else if (newEmployee['addEmployee'] === 'Intern') {
        // call intern prompts

        const intern = new Intern();    
        intern.promptUser()
          .then( internData => {
            intern.name = internData['name'];
            intern.id = internData['id'];
            intern.email = internData['email'];

            //nested intern callback
            intern.getSchool()
              .then( schoolData => {
                intern.school = schoolData['school'];

                this.internArr.push(intern);

                // Loop through the program again
                this.addEmployeePrompts();

              })
          
          })

      } else {
        return;
      }
    });
  }

  addEmployee() {
    return inquirer
      .prompt({
        type: 'list',
        name: 'addEmployee',
        message: `Would you like to add an employee?`,
        choices: ['Engineer', 'Intern', 'Finished Building Team']
      })
  }


}

module.exports = Profiler;