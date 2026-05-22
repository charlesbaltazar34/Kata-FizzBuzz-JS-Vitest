import { describe, expect, test } from 'vitest';
import { checkNumber } from '../src/js/fizzbuzz.js';

describe('Fizzbuzz', () => {
    
    test('should return Fizz', () => {
        const n = 3;
        const expected = "FizzB";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    })

})