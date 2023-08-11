const {
    add,
    subtract,
    multiply,
    divide
} = require("./math");
const { sqrt, max } = Math;

describe("Testing the math functions", () => {

    test("Should add two numbers", () => {
        expect(add(1, 2)).toBe(3);
    });

    test("Should subtract two numbers", () => {
        expect(subtract(5, 1)).toBe(4);
    });

    test("Should multiply two numbers", () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test("Should divide two numbers", () => {
        expect(divide(10, 2)).toBe(5);
    });

    test("Should return the square root of a number", () => {
        expect(sqrt(4)).toBe(2);
    });

    test("Should return the largest of two numbers", () => {
        expect(max(10, 20)).toBe(20);
    });

});