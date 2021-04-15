const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");


test('tests the creation of the engineer object', () => {
  const engineer = new Engineer('Chris', 45, 'campbefs@gmail.com', 'github.com/campbefs');

  expect(engineer.name).toBe("Chris");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email.length).toBeGreaterThan(0);
  expect(engineer.github).toContain("github.com/");

})