
// Function default parameter for not provided values

function add(num1, num2 = 0){
    const result = num1 + num2;
    return result;
}
const numbers = add(13);
console.log(numbers);