const Manager = require('../lib/Manager');

test("Creates manager info", () => {
  const manager = new Manager("David", 3, "123@email.com", 123456789);

  expect(manager.name).toBe("David");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe("123@email.com");
  expect(manager.officeNumber).toEqual(expect.any(Number));

  console.log(manager);
});
