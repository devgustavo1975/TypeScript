var Calculator = /** @class */ (function () {
    function Calculator() {
        this.history = [];
    }
    Calculator.prototype.add = function (a, b) {
        var result = a + b;
        this.log("".concat(a, " + ").concat(b, " = ").concat(result));
        return result;
    };
    Calculator.prototype.log = function (operation) {
        this.history.push(operation);
    };
    Calculator.prototype.getHistory = function () {
        return this.history;
    };
    return Calculator;
}());
var calc = new Calculator();
console.log(calc.add(5, 3)); // 8
console.log(calc.getHistory()); // ['5 + 3 = 8']
