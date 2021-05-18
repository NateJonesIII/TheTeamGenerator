const Employee = require("../lib/Employee")

describe("Employee", () => {
    describe("initialization", () => {
        it("New employee object should be created", () => {
            const employee = new Employee("John Racks", 123, "test@gmail.com");

            expect(employee.name).toBe("John Racks");
            expect(employee.id).toBe(123);
            expect(employee.email).toBe("test@gmail.com");
        });

        it("Method should return name", () => {
            const emp = new Employee("John Smith", 1234, "test1@gmail.com");
            const testName = "John Smith";

            expect(emp.getName()).toBe(testName);
        });

        it("Method should return ID", () => {
            const emp = new Employee("John Smith", 1234, "test1@gmail.com");
            const testId = 1234;

            expect(emp.getId()).toBe(testId);
        });

        it("Method should return email", () => {
            const emp = new Employee("John Smith", 1234, "test1@gmail.com");
            const testEmail = "test1@gmail.com";

            expect(emp.getEmail()).toBe(testEmail);
        });

        it("Method should return role", () => {
            const emp = new Employee("John Smith", 1234, "test1@gmail.com");
            const testRole = "Employee";

            expect(emp.getRole()).toBe(testRole);
        });

    });

});
