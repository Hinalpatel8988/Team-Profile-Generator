const Intern = require("../lib/Intern");

test("can create school via constructor ", () => {
    const testSchool = "School Name";
    const intern = new Intern("Hinal", 1234, "hinal1234@gmail.com", testSchool);
    expect(intern.school).toBe(testSchool);
});

test("can get school via getschool", () => {
    const testSchool = "School Name";
    const intern = new Intern("Hinal", 1234, "hinal1234@gmail.com", testSchool);
    expect(intern.getSchool()).toBe(testSchool);
});

test("get role of intern", () => {
    const testRole = "Intern";
    const intern = new Intern("Hinal", 1234, "hinal1234@gmail.com", testRole);
    expect(intern.getRole()).toBe(testRole);
});