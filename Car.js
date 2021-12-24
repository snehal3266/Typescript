var Car = /** @class */ (function () {
    function Car(t, m, c) {
        this.type = t;
        this.model = m;
        this.color = c;
    }
    Car.prototype.display = function () {
        console.log("type:" + this.type);
        console.log("model:" + this.model);
        console.log("color:" + this.color);
    };
    return Car;
}());
var c = new Car("Ciaz", "2021", "Gray");
c.display();
c = new Car("Hundai-Elantra", "2015", "White");
c.display();
