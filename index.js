const { prompt } = require('inquirer');
const Profiler = require('./lib/Profiler');


const promptUser = () => {
  // const profiler = new Profiler();

  new Profiler().getData();

}

promptUser();
