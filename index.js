const { prompt } = require('inquirer');
const Profiler = require('./lib/Profiler');


const promptUser = async() => {

  const profiler = new Profiler().getData();
  return profiler
}

promptUser();
