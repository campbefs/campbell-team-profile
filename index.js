const { prompt } = require('inquirer');
const Profiler = require('./lib/Profiler');


const mainPrompts = () => {

  const profiler = new Profiler();
  return profiler.getData();

}

mainPrompts()
  .then(data => {
    console.log('string: ', data);
  });

// new Profiler().getData();