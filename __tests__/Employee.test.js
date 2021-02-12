const Employee = require("../lib/Employee");

test("Creates employee info", () => {
  const employee = new Employee("David", 1111, "david@email.com");

  expect(employee.name).toBe("David");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toBe("david@email.com");

  console.log(employee);
});
