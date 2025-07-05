const { add } = require("../app/stringCalculator")

describe("Simple test cases - Task 1", () => {

    test("for empty string returns 0", () => {
        expect(add("")).toBe(0);
    });

    test("for single number returns number", () => {
        expect(add("8")).toBe(8);
    });

    test("for two numbers returns sum", () => {
        expect(add("5,2")).toBe(7);
    });

});

describe("any amount of numbers test cases - Task 2", () => {

    test("for any amount of numbers returns total sum", () => {
        expect(add("1,2,3")).toBe(6);
        expect(add("10,20,30,40")).toBe(100);
    });

});

describe("handle new lines between the numbers - Task 3", () => {

    test("new lines in input is allowed", () => {
        expect(add("1\n2,3")).toBe(6);
        expect(add("4\n5\n6")).toBe(15);
    });

});

describe("support custom single-character delimiter - Task 4", () => {

    test("single-character delimiter is allowed", () => {
        expect(add("//;\n1;2")).toBe(3);
        expect(add("//-\n4-5-6")).toBe(15);
    });

});