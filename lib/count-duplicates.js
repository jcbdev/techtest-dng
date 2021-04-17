"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countDuplicates = void 0;
var countDuplicates = function (input, ignoreCase, ignoreWhitespace) {
    var counts = {};
    // Remove whitespace and lowercase the string if the options are supplied
    var cleanedInput = (ignoreCase ? input.toLowerCase() : input);
    cleanedInput = (ignoreWhitespace ? cleanedInput.replace(/\s/g, "") : cleanedInput);
    // Create count object from each letters frequency
    cleanedInput.split('').forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
    // filter letters of less than 2 frequency (not duplicates) and return a new object with the remaining letters
    return Object.entries(counts).filter(function (_a) {
        var letter = _a[0], count = _a[1];
        return count > 1;
    }).reduce(function (acc, _a) {
        var _b;
        var key = _a[0], value = _a[1];
        return (__assign(__assign({}, acc), (_b = {}, _b[key] = value, _b)));
    }, {});
};
exports.countDuplicates = countDuplicates;
