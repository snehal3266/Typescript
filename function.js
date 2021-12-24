//Typescript resturning function
function getMessage() {
    return "Hello World!";
}
function get() {
    var msg = getMessage();
    console.log(msg);
}
get();
//TypeScript Parameterized Function
function student(name, roll_no) {
    console.log(name);
    console.log(roll_no);
}
student("Sneha", 2);
//Typescript rest parameter Syntax
function showNames() {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
showNames("sneha", "Rutuja", "Khushboo", "Sakshi", "Priyanka");
//TypeScript Anonymous function(function created without function name)
var my = function () {
    return "Hello World!";
};
console.log(my());
//TypeScript function Constructor
var add = new Function("num1", "num2", "return num1 + num2");
var result = add(10, 15);
console.log(result);
//TypeScript Arrow or Lambda function
var Square = function (base, height) {
    var square = base * height;
    console.log(square);
};
Square(30, 25);
