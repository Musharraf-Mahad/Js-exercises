let person = {
    name: "Musharraf",
    age: 22,
    great: function() {
        console.log("Hello my name is " + this.name);
    }, 
    start: function() {
        console.log("The car has started ");
    }
};

person.start();