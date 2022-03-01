
// arrow function const numbers = (parameter- num1, num2) => num1 + num2;


const add = (num1, num2) => num1 + num2;
const sum = add(12, 12);
console.log(sum);

// using string

const getName = () => 'Brenda L';
const ame = getName();
console.log(ame);

// multi line

const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    const output = result * 5;
    return output;
}
const total = doMath(5, 5);
console.log(total);

