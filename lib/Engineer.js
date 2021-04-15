const inquirer = require("inquirer");
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name='', id=0, email='', github='') {
    super();
    
    this.name = name;
    this.id = id;
    this.email = email;
    this.github = github;
    this.role = 'Engineer';
  }

  getGithub() {
    return inquirer
            .prompt({
              type: 'text',
              name: 'github',
              message: `What is the Engineer's GitHub?`,
              validate: github => {
                if (!github.includes('github.com/')) {
                  console.log('  Please enter a valid github url');
                  return false;
                } else {
                  return true;
                }
              }
            });
  }

}

module.exports = Engineer;

