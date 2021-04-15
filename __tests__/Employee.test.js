const Employee = require('../lib/Employee');

test('creates an employee object', () => {
  const employee = new Employee('Chris', 42, 'campbefs@gmail.com');

  expect(employee.name).toBe('Chris');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email.length).toBeGreaterThan(0);
})

