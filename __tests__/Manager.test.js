const Manager = require("../lib/Manager");

test("Creates manager info", () => {
  const manager = new Manager("David", 3, "123@email.com", 123456789);

  expect(manager.name).toBe("David");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toBe("123@email.com");
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("getOfficeNumber will return phone number", () => {
  const numberTest = 123;
  const manager = new Manager("David", 23, "test@test.com", numberTest);
  expect(manager.getOfficeNumber()).toBe(123);
});

test('get role will return "Manager"', () => {
  const managerTest = "Manager";
  const manager = new Manager();
  expect(manager.getRole()).toBe('Manager');
});
