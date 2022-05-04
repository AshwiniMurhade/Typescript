var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vivek = /** @class */ (function () {
    function Vivek(name, age) {
        this.name = name;
        this.age = age;
    }
    return Vivek;
}());
var Kumar = /** @class */ (function (_super) {
    __extends(Kumar, _super);
    function Kumar(name, age, address) {
        var _this = _super.call(this, name, age) || this;
        _this.display = function () { return console.log(_this.name, _this.age, _this.address); };
        _this.add = function (i, j) { return i + j; };
        _this.mul = function (i, j) { return i * j; };
        _this.address = address;
        return _this;
    }
    return Kumar;
}(Vivek));
var obj = new Kumar("Vivek", 24, "Patna");
obj.display();
console.log(obj.add(5, 6));
console.log(obj.mul(3, 4));
