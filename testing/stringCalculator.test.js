const { add } = require("../app/stringCalculator")

describe("Simple test cases - Task 1", () => {

    test("for empty string returns 0", () => {
        expect(add("")).toBe(0);
    });

    test("for single number returns number", () => {
        expect(add("8")).toBe(8);
    });

});