const Intern = require("../lib/Intern");

test("Creates intern info", () => {
  const intern = new Intern("Dave", 4, "123@email.com", "Test School");

  expect(intern.name).toBe("Dave");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe("123@email.com");
  expect(intern.school).toBe("Test School");
});

test("getSchool() will return school", () => {
  const testSchool = "U of T";
  const intern = new Intern("Dave", 4, "test@test.com", testSchool);
  expect(intern.getSchool()).toBe(testSchool);
});

test('getRole() will return "Intern"', () => {
  const testRole = "Intern";
  const intern = new Intern('Dave', 3, 'test@test.com', 'U of T');
  expect(intern.getRole()).toBe('Intern');
});