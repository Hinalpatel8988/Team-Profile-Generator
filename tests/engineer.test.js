
const Engineer = require("../lib/Engineer");

test("can create a github", () => {
    const testGithub = "Hinalpatel8988";
    const engineer = new Engineer("Hinal", 1234, "hinal1234@gmail.com", testGithub);
    expect(engineer.github).tobe(testGithub);
});

test("can get github via getgithub", () => {
    const testGithub = "Hinalpatel8988";
    const engineer = new Engineer("Hinal", 1234, "hinal1234@gmail.com", testGithub);
    expect(engineer.getGithub()).tobe(testGithub);
});

test("get role of engineer", () => {
    const testRole = "Engineer";
    const engineer = new Engineer("Hinal", 1234, "hinal1234@gmail.com", "Hinalpatel8988");
    expect(employee.getRole()).tobe(testRole);
});


