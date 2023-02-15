const Manager = require("../lib/Manager");

test("can create officenumber via constructor ", () => {
    const testOfficenumber = 12;
    const manager = new Manager("Hinal", 1234, "hinal1234@gmail.com", testOfficenumber);
    expect(manager.officeNumber).toBe(testOfficenumber);
});

test("can get officenumber via getOfficeNumber", () => {
    const testOfficenumber = 12;
    const manager = new Manager("Hinal", 1234, "hinal1234@gmail.com", testOfficenumber);
    expect(manager.getOfficeNumber()).toBe(testOfficenumber);
});

test("get role of manager", () => {
    const testRole = "Manager";
    const manager = new Manager("Hinal", 1234, "hinal1234@gmail.com", testRole);
    expect(manager.getRole()).toBe(testRole);
});