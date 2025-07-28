// src/calculator.spec.ts
import {add} from './calculator';

describe('Calculator', () => {
    it('should add two numbers', () => {
        console.log("Testing")
        expect(add(2, 3)).toBe(5);
    });
});