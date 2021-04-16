const generateData = employeeData => {

  const dataChecker = data => {
    if (data.role === 'Manager') {
      const eeDataType = 'Office Number:';
      const eeData = data.officeNumber;
      return [eeDataType, eeData];
    } else if (data.role === 'Engineer') {
      const eeDataType = 'Github:';
      const eeData = `<a href="${data.github}">GitHub</a>`;
      return [eeDataType, eeData];
    } else if (data.role === 'Intern') {
      const eeDataType = 'School:'
      const eeData = data.school;
      return [eeDataType, eeData];
    };
  };

  [eeDataType, eeData] = dataChecker(employeeData);

  return `
      <div class="employees">
        <div class="employee-top">
          <h2 class="employee-name">${employeeData.name}</h2>
          <p class="job-title">${employeeData.role}</p>
        </div>
        <div class="employee-data">
          <ul class="data-ul">
            <li class="data-item">ID: ${employeeData.id}</li>
            <li class="data-item">Email: <a href="mailto:${employeeData.email}">${employeeData.email}</a></li>
            <li class="data-item">${eeDataType} ${eeData}</li>
          </ul>
        </div>
      </div>
  `
}
// 

const generateEmployees = employeeArr => {
  employeeStrArr = [];
  for (i=0; i<employeeArr.length; i++) {
    blockHtml = generateData(employeeArr[i]);
    employeeStrArr.push(blockHtml);
  };

  return employeeStrArr.join('');
}

const generateHtml = employeeArr => {
  const employeeString = generateEmployees(employeeArr);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="./style.css">
  <title>Campbell's Team Profile Generator</title>
</head>
<body>
  <h1 id="header">My Team</h1>
  <section class="team-members">
    <div class="holding-blocks">
        
            ${employeeString}

    </div>

  </section>
  
</body>
</html>
  `
}

module.exports = generateHtml;