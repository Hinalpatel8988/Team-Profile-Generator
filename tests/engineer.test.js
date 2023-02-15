
const Engineer = require("../lib/Engineer");

test("Returns GitHub id as passed to fucntion", () => {
    const testGithub = "Hinalpatel8988";
    const engineer = new Engineer("Hinal", 1234, "hinal1234@gmail.com", testGithub);
    expect(engineer.github).toBe(testGithub);
});

test("can set GitHub", () => {
    const testGithub = "Hinalpatel8988";
    const engineer = new Engineer("Hinal", 1234, "hinal1234@gmail.com", testGithub);
    expect(engineer.getGithub()).toBe(testGithub);
});

test("get role of engineer", () => {
    const testRole = "Engineer";
    const engineer = new Engineer("Hinal", 1234, "hinal1234@gmail.com", "Hinalpatel8988");
    expect(engineer.getRole()).toBe(testRole);
});


