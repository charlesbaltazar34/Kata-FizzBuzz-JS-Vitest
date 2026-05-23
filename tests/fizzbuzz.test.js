import { describe, expect, test } from 'vitest';
import { checkNumber } from '../src/js/fizzbuzz.js';

describe('Fizzbuzz', () => {
    
    //Número divisible por 3
    test('should return Fizz', () => {
        const n = 3;
        const expected = "Fizz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    })

    //Número divisible por 5
    test('should return Buzz', () => {
        const n = 5;
        const expected = "Buzz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    })

    //Número divisible por 3 y 5
    test('should return FizzBuzz', () => {
        const n = 15;
        const expected = "FizzBuzz";
        const result = checkNumber(n);
        expect(result).toBe(expected);
    })

    //Número No divisible por 3 y 5
    test('should return Número', () => {
        const n = 7;
        const expected = 7;
        const result = checkNumber(n);
        expect(result).toBe(expected);
    })

    //El dato proporcionado no es un número
    test('should return El dato proporcionado no es un número', () =>{
        const dato = 'hola'
        expect(() => checkNumber(dato)).toThrowError('El dato proporcionado no es un número');
    })
})