const Employee = require("../lib/Employee");

test("create a new employee from the class", () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe("object");

});

test("can set name via constructor arguments", () => {
    const name = "Hinal";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
});

test("can set id via constructor arguments", () => {
    const testId = 1234;
    const employee = new Employee("Hinal", testId);
    expect(employee.getId()).toBe(testId);
});

test("can set email via constructor arguments", () => {
    const testEmail = "hinal1234@gmail.com";
    const employee = new Employee("Hinal", 1234, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test("can add name via getname", () => {
    const testName = "Hinal";
    const employee = new Employee(testName);
    expect(employee.getName()).toBe(testName);
});

test("add id via getid", () => {
    const testId = 1234;
    const employee = new Employee("Hinal",testId);
    expect(employee.getId()).toBe(testId);
});

test("add email via getemail", () => {
    const testEmail = "hinal1234@gmail.com";
    const employee = new Employee("Hinal", 1234, testEmail);
    expect(employee.getEmail()).toBe(testEmail);
});

test("add role of employee", () => {
    const testRole = "Employee";
    const employee = new Employee("Hinal", 1234, "hinal1234@gmail.com");
    expect(employee.getRole()).toBe(testRole);
});

