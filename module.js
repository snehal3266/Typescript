"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person;
(function (Person) {
    var Student = /** @class */ (function () {
        function Student() {
        }
        Student.prototype.getName = function () {
            return 'Sneha';
        };
        return Student;
    }());
    Person.Student = Student;
    var Teacher = /** @class */ (function () {
        function Teacher() {
        }
        Teacher.prototype.getName = function () {
            return 'Rutu';
        };
        return Teacher;
    }());
    Person.Teacher = Teacher;
})(Person = exports.Person || (exports.Person = {}));
