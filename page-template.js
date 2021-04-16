const generateData = employeeData => {
  if (!employeeData) {
    return '';
  };

  if (employeeData.role === 'Manager') {
    const eeDataType = 'Office Number: ';
    const eeData = employeeData.officeNumber;
  } else if (employeeData.role === 'Engineer') {
    const eeDataType = 'Github: ';
    const eeData = employeeData.github;
  } else if (employeeData.role === 'Intern') {
    const eeDataType = 'School: '
    const eeData = employeeData.school;
  };

  return `
    <div class="employees">
    <div class="employee-top">
      <h2 class="employee-name">${employeeData.name}</h2>
      <p class="job-title">${employeeData.role}</p>
    </div>
    <div class="employee-data">
      <ul class="data-ul">
        <li class="data-item">ID: ${employeeData.id}</li>
        <li class="data-item">Email: ${employeeData.email}</li>
        <li class="data-item">${eeDataType, eeData}</li>
      </ul>
    </div>
    </div>
  `
}

const generateEmployees = employeeObject => {

}


