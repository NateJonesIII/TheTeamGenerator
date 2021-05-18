const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("initialization", () => {
        it("New Engineer object should be created", () => {
            const engineer = new Engineer("John Doe", 123, "test2@gmail.com", "jd45");

            expect(engineer.name).toBe("John Doe");
            expect(engineer.id).toBe(123);
            expect(engineer.email).toBe("test2@gmail.com");
            expect(engineer.gitHub).toBe("jd45")
        });

        it("Method should return name", () => {
            const eng = new Engineer("John Smith", 1234, "test2@gmail.com");
            const testName = "John Smith";

            expect(eng.getName()).toBe(testName);
        });

        it("Method should return ID", () => {
            const eng = new Engineer("John Smith", 12345, "test2@gmail.com");
            const testId = 12345;

            expect(eng.getId()).toBe(testId);
        });

        it("Method should return email", () => {
            const eng = new Engineer("John Smith", 1234, "test3@gmail.com");
            const testEmail = "test3@gmail.com";

            expect(eng.getEmail()).toBe(testEmail);
        });

        it("Method should return github username", () => {
            const eng = new Engineer("John Smith", 1234, "test1@gmail.com", "jd45");
            const testGit = "jd45";

            expect(eng.getGithub()).toBe(testGit);
        });

        it("Method should return role", () => {
            const eng = new Engineer("John Smith", 1234, "test3@gmail.com");
            const testRole = "Engineer";

            expect(eng.getRole()).toBe(testRole);
        });

    });

});