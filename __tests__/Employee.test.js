const Employee = require("../lib/Employee");

test("Creates employee info", () => {
  const employee = new Employee("David", 1111, "david@email.com");

  expect(employee.name).toBe("David");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("david@email.com");
});

test("getName() will return name", () => {
  const testName = "Raj";
  const employee = new Employee(testName, 3, "test@test.com");
  expect(employee.getName()).toBe(testName);
});

test("getId() will return id", () => {
  const testId = 23;
  const employee = new Employee("Raj", testId, "test@test.com");
  expect(employee.getId()).toBe(testId);
});

test("getEmail() will return email", () => {
  const testEmail = "test@test.com";
  const employee = new Employee("Raj", 3, testEmail);
  expect(employee.getEmail()).toBe(testEmail);
});

test("getRole() will return 'Employee'", () => {
  const testRole = "Employee";
  const employee = new Employee(testRole);
  expect(employee.getRole()).toBe("Employee");
});
