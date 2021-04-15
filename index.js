const { prompt } = require('inquirer');
const Profiler = require('./lib/Profiler');


const promptUser = async() => {

  const profiler = new Profiler();
  return profiler.getData()

}

promptUser()
  .then(data => {
    console.log(data);
  });
