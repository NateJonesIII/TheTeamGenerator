const Intern = require("../lib/Intern")

describe("Intern", () => {
    describe("initialization", () => {
        it("New Intern object should be created", () => {
            const intern = new Intern("John Ach", 123, "test2@gmail.com", "UM");

            expect(intern.name).toBe("John Ach");
            expect(intern.id).toBe(123);
            expect(intern.email).toBe("test2@gmail.com");
            expect(intern.school).toBe("UM")
        });

        it("Method should return name", () => {
            const int = new Intern("John Smith", 1234, "test2@gmail.com");
            const testName = "John Smith";

            expect(int.getName()).toBe(testName);
        });

        it("Method should return ID", () => {
            const int = new Intern("John Smith", 1234, "test2@gmail.com");
            const testId = 1234;

            expect(int.getId()).toBe(testId);
        });

        it("Method should return email", () => {
            const int = new Intern("John Smith", 1234, "test2@gmail.com");
            const testEmail = "test2@gmail.com";

            expect(int.getEmail()).toBe(testEmail);
        });

        it("Method should return school", () => {
            const int = new Intern("John Smith", 1234, "test1@gmail.com", "UM");
            const testSchool = "UM";

            expect(int.getSchool()).toBe(testSchool);
        });

        it("Method should return role", () => {
            const int = new Intern("John Smith", 1234, "test2@gmail.com", "UM");
            const testRole = "Intern";

            expect(int.getRole()).toBe(testRole);
        });

    });

});