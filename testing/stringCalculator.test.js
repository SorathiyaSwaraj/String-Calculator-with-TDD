const { add, GetCalledCount } = require("../app/stringCalculator")

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

describe("adding negative numbers to input  - Task 5", () => {

    test("throws an error on negative numbers", () => {
        expect(() => add("-1,-2")).toThrow("negative numbers not allowed");
    });

    test("prints the negative number in error ", () => {
        expect(() => add("1,2,-3")).toThrow("negative numbers not allowed <-3>");
    });

});

describe("adding multiple negative numbers to input  - Task 6", () => {

    test("prints all negative numbers in error ", () => {
        expect(() => add("1,-2,-3")).toThrow("negative numbers not allowed <-2,-3>");
    });

});

describe("added new method called GetCalledCount()  - Task 7", () => {

    test("new method gives numbers of add method called ", () => {
        expect(GetCalledCount()).toBe(12);
    });

});

describe("number greater than 1000 are not allowed  - Task 9", () => {

    test('numbers greater than 1000 are ignored', () => {
        expect(add("2,1001")).toBe(2);
        expect(add("1000,1")).toBe(1001);
        expect(add("1001,1002")).toBe(0);
    });

});

describe("Custom delimiter with any length  - Task 10", () => {

    test('supports custom delimiter of any length', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
        expect(add("//[--]\n4--5--6")).toBe(15);
    });

});

describe("allow multiple custom delimiters with single length  - Task 11", () => {

    test('supports multiple custom delimiters', () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

});