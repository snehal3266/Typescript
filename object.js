//TypeScript Number Object 
var num;
function Test(num) {
    console.log(num);
}
Test(500);
//TypeScript String Object
var str = "Sneha";
function Test1(str) {
    console.log(str);
}
Test1(str);
//TypeScript Boolean Object
function Test2(bVar) {
    console.log(bVar.valueOf());
}
var A = new Boolean(true);
var B = new Boolean(false);
var C = true;
Test2(A);
Test2(B);
Test2(C);
//TypeScript Date Object
function Test3(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    console.log("Current Time: " + hours + ":" + minutes + ":" + seconds);
}
var date = new Date();
Test3(date);
//TypeScript Math Object
function Test4(num) {
    var squarRoot = Math.sqrt(num);
    console.log("Random Number:  " + num);
    console.log("Square root:  " + squarRoot);
}
var num = Math.random();
Test4(num);
//TypeScript Array Object
function Test5(names) {
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
var names = ["Bharat", "Sahdev", "Richi", "Harish", "Bharti", "Deepika", "Shaveta"];
Test5(names);
