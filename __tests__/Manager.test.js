const Manager = require('../lib/Manager');

test('creates a manager object', () => {
  const manager = new Manager('Chris',42,'campbefs@gmail.com',999);

  // console.log(manager);
  expect(manager.name).toBe('Chris');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email.length).toBeGreaterThan(0);
  expect(manager.officeNumber).toEqual(999);

  console.log(manager);
})

