function calculateArea(width, height = width) {
    return  width * height;
}

console.log("Area of Square is: " + calculateArea(5,4));
console.log("Area of Square is: " + calculateArea(5));