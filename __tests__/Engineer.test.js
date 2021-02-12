const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Creates Engineer info", () => {
  const engineer = new Engineer(
    "David",
    1111,
    "david@email.com",
    "www.github.com"
  );

  expect(engineer.name).toBe("David");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toBe("david@email.com");
  expect(engineer.github).toBe("www.github.com");
});

test("getGithub() should return github name", () => {
  const githubTest = "testUser";
  const engineer = new Engineer("David", 23, "test@test.com", githubTest);
  expect(engineer.getGithub()).toBe("testUser");
});

test('getRole() will return "Engineer"', () => {
  const roleTest = "Engineer";
  const engineer = new Engineer("David", 23, "test@test.com", "githubUser");
  expect(engineer.getRole()).toBe("Engineer");
});
