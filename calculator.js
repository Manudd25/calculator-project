
class Calculator {
    constructor() {
        this.PI = Math.PI,
        this.E = Math.E
    }

    ratio(x, y, width) {
        return (width * y) / x;
        
    }

    percentage(x, y) {
        if(y === 0) {
            console.log('Error: Divisor cannot be zero.')
        }
        const result = (x / y) * 100;
        return result + '%'
    }

    add(x, y) {
        return x + y;
    }

    subtract(x,y) {
        return x - y
        
    }

    multiply(x, y) {
        return x * y
        
    }

    divide(x, y) {
        if(y === 0) {
            console.log('Error: Divisor cannot be zero')
        }
        return x / y;
    }

    remainder(x, y) {
        if(y === 0) {
            console.log('Error: Divisor cannot be zero')
        }
        return x % y 
    }

    elevate(x, y) {
        return Math.pow(x, y)
    }
    
    sqrt(x) {
        if(x < 0) {
            console.log('Error: Cannot calculate the square root of a negative number')
        }
        return Math.sqrt(x)
    }
}


const calc = new Calculator()


console.log(calc.ratio(5, 7, 300));
console.log(calc.percentage(3, 12));
console.log(calc.add(5, 7));
console.log(calc.subtract(5, 7));
console.log(calc.multiply(5, 7));
console.log(calc.divide(35, 7));
console.log(calc.remainder(7, 5));
console.log(calc.elevate(5, 3));
console.log(calc.sqrt(25));
console.log(calc.remainder(24,0))