const Profiler = require('./lib/Profiler');
const pageTemplate = require('./page-template.js');
const writeFile = require('./dist/generate-site');

const mainPrompts = () => {

  const profiler = new Profiler();
  return profiler.getData();

}

mainPrompts()
  .then(data => {
    writeFile(pageTemplate(data['employeeArr']));
  });

