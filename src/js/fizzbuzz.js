
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