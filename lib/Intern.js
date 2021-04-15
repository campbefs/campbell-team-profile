const inquirer = require("inquirer");
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super();

    this.name = name;
    this.id = id;
    this.email = email;
    this.school = school;
    this.role = 'Intern';
  }

  getSchool() {
    return inquirer
      .prompt({ 
        type: 'text',
        name: 'school',
        message: `What is the intern's school?`,
        validate: (school) => {
          if (school.length === 0) {
            console.log('Please enter a valid school');
            return false;
          } else {
            return true;
          }
        }

      })
  }

}

module.exports = Intern;

// new Intern().getSchool();