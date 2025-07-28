"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/calculator.spec.ts
const calculator_1 = require("./calculator");
describe('Calculator', () => {
    it('should add two numbers', () => {
        console.log("Testing");
        expect((0, calculator_1.add)(2, 3)).toBe(5);
    });
});
