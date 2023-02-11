const Employee = require("../lib/Employee");

test("create a new employee from the class", () => {
    const employee = new Employee();
    expect(typeof(employee)).tobe("object");

});

test("can set name via constructor arguments", () => {
    const name = "Hinal";
    const employee = new Employee(name);
    expect(employee.name).tobe(name);
});

test("can set id via constructor arguments", () => {
    const testId = "1234";
    const employee = new Employee("Hinal", testId);
    expect(employee.testId).tobe(testId);
});

test("can set email via constructor arguments", () => {
    const testEmail = "hinal1234@gmail.com";
    const employee = new Employee("Hinal", 1234, testEmail);
    expect(employee.testEmail).tobe(testEmail);
});

test("can add name via getname", () => {
    const testName = "Hinal";
    const employee = new Employee("testname");
    expect(employee.getName()).tobe(testName);
});

test("can add id via getid", () => {
    const testId = "1234";
    const employee = new Employee("Hinal",testId);
    expect(employee.getId()).tobe(testId);
});

test("can add email via getemail", () => {
    const testEmail = "hinal1234@gmail.com";
    const employee = new Employee("Hinal", 1234, testEmail);
    expect(employee.getEmail()).tobe(testEmail);
});

test("get role of employee", () => {
    const employee = new Employee("Hinal", 1234, "hinal1234@gmail.com");
    expect(employee.getRole()).toEqual("Employee");
});

