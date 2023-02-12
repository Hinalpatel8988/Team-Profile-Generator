const Intern = require("../lib/Intern");

test("can create school via constructor ", () => {
    const testSchool = "Monash";
    const intern = new Intern("Hinal", 1234, "hinal1234@gmail.com", testSchool);
    expect(intern.school).tobe(testSchool);
});

test("can get school via getschool", () => {
    const testSchool = "Monash";
    const intern = new Intern("Hinal", 1234, "hinal1234@gmail.com", testSchool);
    expect(intern.getSchool()).tobe(testSchool);
});

test("get role of intern", () => {
    const testRole = "Intern";
    const intern = new Intern("Hinal", 1234, "hinal1234@gmail.com", testRole);
    expect(intern.getRole()).tobe(testRole);
});