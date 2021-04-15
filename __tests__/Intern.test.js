const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

test(('Test of the intern object'), () => {
  const intern = new Intern("Chris", 45, "c.campbell615@gmail.com", "UMass");

  expect(intern.name).toBe("Chris");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email.length).toBeGreaterThan(0);
  expect(intern.school.length).toBeGreaterThan(0);

})