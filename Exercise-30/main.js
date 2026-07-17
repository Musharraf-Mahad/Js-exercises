function operate(a,b, callback) {
        return callback(a,b);
    }

    function add(a,b) {
        return a + b;
    }

    function substract(a,b) {
        return a - b;
    }

     function multiply(a,b) {
        return a * b;
    }

    function divide(a,b) {
        return a / b;
    }

    console.log("Addition", operate(4,5,add));
    console.log("Substract", operate(10,5,substract));
    console.log("Multiply", operate(5,5,multiply));
    console.log("Divide", operate(40,5,divide));