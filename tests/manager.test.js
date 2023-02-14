const Manager = require("../lib/Manager");

test("can create officenumber via constructor ", () => {
    const testOfficenumber = 0412345678;
    const manager = new Manager("Hinal", 1234, "hinal1234@gmail.com", testOfficenumber);
    expect(manager.officeNumber).tobe(testOfficenumber);
});

test("can get officenumber via getOfficeNumber", () => {
    const testOfficenumber = 0412345678;
    const manager = new Manager("Hinal", 1234, "hinal1234@gmail.com", testOfficenumber);
    expect(manager.getOfficeNumber()).tobe(testOfficenumber);
});

test("get role of manager", () => {
    const testRole = "Manager";
    const manager = new Manager("Hinal", 1234, "hinal1234@gmail.com", testRole);
    expect(manager.getRole()).tobe(testRole);
});