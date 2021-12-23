var Person = /** @class */ (function () {
    function Person(n, a, m) {
        this.name = n;
        this.adharno = a;
        this.mobileno = m;
    }
    Person.prototype.get = function () {
        this.name = "Khushboo";
        this.adharno = "343434343434";
        this.mobileno = "9545353232";
    };
    Person.prototype.display = function () {
        console.log("Name: " + this.name);
        console.log("Adhar No: " + this.adharno);
        console.log("Mobile No: " + this.mobileno);
    };
    return Person;
}());
var p = new Person("A", "B", "C");
//p.get();
p.display();
