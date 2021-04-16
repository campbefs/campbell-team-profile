
const Manager = require('./Manager');
const inquirer = require("inquirer");
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Profiler {
  constructor() {
    // this.manager = Object();
    // this.engineerArr = [];
    // this.internArr = [];
    this.employeeArr = [];
  }


  getData() {
    const manager = new Manager();    
    return manager.promptUser()
      .then( data => {
        manager.name = data['name'];
        manager.id = data['id'];
        manager.email = data['email'];
        

        // nested callback for manager's office number
        return manager.getOffice()
          .then( managerData => {
            manager.officeNumber = managerData['officeNumber'];
            this.employeeArr.push(manager);
            
            return this.addEmployeePrompts();

          })
        });
  }

  addEmployeePrompts() {
    // call the 'add employee' function -- turn into its own function
    return this.addEmployee()
    .then( newEmployee => {
      if (newEmployee['addEmployee'] === 'Engineer') {
        // call eng prompts
        
        const engineer = new Engineer();    
        return engineer.promptUser()
          .then( engineerData => {
            engineer.name = engineerData['name'];
            engineer.id = engineerData['id'];
            engineer.email = engineerData['email'];

            // nested engineer callback
            return engineer.getGithub()
              .then( githubData => {
                engineer.github = githubData['github'];

                this.employeeArr.push(engineer);
                
                // Loop through the program again
                return this.addEmployeePrompts();
              })
          });

      } else if (newEmployee['addEmployee'] === 'Intern') {
        // call intern prompts

        const intern = new Intern();    
        return intern.promptUser()
          .then( internData => {
            intern.name = internData['name'];
            intern.id = internData['id'];
            intern.email = internData['email'];

            // nested intern callback
            return intern.getSchool()
              .then( schoolData => {
                intern.school = schoolData['school'];

                this.employeeArr.push(intern);

                // Loop through the program again
                return this.addEmployeePrompts();

              })
          
          })

      } else if (newEmployee['addEmployee'] === 'Finished Building Team') {
        // console.log('final object: ', this);
        return this;
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