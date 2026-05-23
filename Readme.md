# Kata - FizzBuzz - JS - Vitest

Escribe un programa que imprima los números del 1 al 100, aplicando los siguientes criterios:

# Scenario: Número divisible por 3
    Given que proporciono el número 3
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "Fizz"

# Scenario: Número divisible por 5
    Given que proporciono el número 5
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "Buzz"

# Scenario: Número divisible por 3 y 5
    Given que proporciono el número 15
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "FizzBuzz"

# Scenario: Número no divisible ni por 3 ni por 5
    Given que proporciono el número 7
    When ejecuto la función FizzBuzz
    Then el resultado debe ser "7"

# Scenario: El dato proporcionado no es un número
    Given que proporciono el valor "hola"
    When ejecuto la función FizzBuzz
    Then debe lanzarse un error indicando que el dato no es un número

## src/js/index.js
    import { checkNumber } from "./fizzbuzz.js";

    //Bucle del 1 al 100
    for (let i = 1; i <= 100; i++){
        const result = checkNumber(i);
        console.log(result);
    }

## src/js/fizzbuzz.js
    export function checkNumber(numb) {
        //Valida si el dato proporcionado No es un número
        if (typeof numb !== 'number'){
            throw new Error('El dato proporcionado no es un número');
        }

        const isDivisibleBy3 = numb % 3 == 0;
        const isDivisibleBy5 = numb % 5 == 0;
        const noIsDivisibleBy3y5 = numb % 3 != 0 && numb % 5 != 0;

        //Número NO divisible por 3
        if (noIsDivisibleBy3y5) {
            return numb;
        }
        
        //Número divisible por 3 y 5
        if (isDivisibleBy3 && isDivisibleBy5) {
            return 'FizzBuzz';
        }

        //Número divisible por 3
        if (isDivisibleBy3) {
            return 'Fizz';
        }

        //Número divisible por 5
        if (isDivisibleBy5) {
            return 'Buzz';
        }

        return numb;
    }

## test/fizzbuzz.test.js
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

### Resultado
node src/js/index.js

1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Fizz
22
23
Fizz
Buzz
26
Fizz
28
29
FizzBuzz
31
32
Fizz
34
Buzz
Fizz
37
38
Fizz
Buzz
41
Fizz
43
44
FizzBuzz
46
47
Fizz
49
Buzz
Fizz
52
53
Fizz
Buzz
56
Fizz
58
59
FizzBuzz
61
62
Fizz
64
Buzz
Fizz
67
68
Fizz
Buzz
71
Fizz
73
74
FizzBuzz
76
77
Fizz
79
Buzz
Fizz
82
83
Fizz
Buzz
86
Fizz
88
89
FizzBuzz
91
92
Fizz
94
Buzz
Fizz
97
98
Fizz
Buzz


