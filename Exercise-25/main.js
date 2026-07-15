
// Spread Operator
let arr1 = [1, 2, 3];

let spread = [...arr1, 4, 5, 6];

console.log(spread);


// Rest Operator
function multiply(...number) {
    return number.reduce((total, num) => total * num, 1);
}

console.log(multiply(2, 5, 3, 5));
