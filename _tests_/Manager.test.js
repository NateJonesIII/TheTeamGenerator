const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("initialization", () => {
        it("New Manager object should be created", () => {
            const manager = new Manager("John Doe", 456, "test2@gmail.com", 9548889999);

            expect(manager.name).toBe("John Doe");
            expect(manager.id).toBe(456);
            expect(manager.email).toBe("test2@gmail.com");
            expect(manager.officeNumber).toBe(9548889999)
        });

        it("Method should return name", () => {
            const man = new Manager("John Smith", 1234, "test2@gmail.com");
            const testName = "John Smith";

            expect(man.getName()).toBe(testName);
        });

        it("Method should return ID", () => {
            const man = new Manager("John Smith", 456, "test2@gmail.com");
            const testId = 456;

            expect(man.getId()).toBe(testId);
        });

        it("Method should return email", () => {
            const man = new Manager("John Smith", 1234, "test5@gmail.com");
            const testEmail = "test5@gmail.com";

            expect(man.getEmail()).toBe(testEmail);
        });

        it("Method should return officenumber", () => {
            const man = new Manager("John Smith", 1234, "test5@gmail.com", 9547778888);
            const testNum = 9547778888;

            expect(man.getOfficeNumber()).toBe(testNum);
        });

        it("Method should return role", () => {
            const man = new Manager("John Smith", 1234, "test2@gmail.com", "UM");
            const testRole = "Manager";

            expect(man.getRole()).toBe(testRole);
        });

    });

});