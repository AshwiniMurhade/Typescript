var Employee = /** @class */ (function () {
    function Employee(username, age) {
        this.username = username;
        this.age = age;
    }
    Employee.prototype.display = function () {
        console.log("Employee name: " + this.username);
        console.log("Employee age: " + this.age);
    };
    return Employee;
}());
var obj = new Employee("Vishal", 25);
obj.display();
