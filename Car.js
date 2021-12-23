var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.get = function () {
        this.type = "ciaz";
        this.model = "2013";
        this.color = "gray";
    };
    Car.prototype.display = function () {
        console.log("type:" + this.type);
        console.log("model:" + this.model);
        console.log("color:" + this.color);
    };
    return Car;
}());
var c = new Car();
c.get();
c.display();
