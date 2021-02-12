const Intern = require("../lib/Intern");

test("Creates intern info", () => {
  const intern = new Intern("Dave", 4, "123@email.com", "Test School");

  expect(intern.name).toBe("Dave");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe("123@email.com");
  expect(intern.school).toBe("Test School");

  console.log(intern);
});

