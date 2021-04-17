"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var count_duplicates_1 = require("../src/count-duplicates");
describe("Count Duplicate Letters", function () {
    it("should count and return only letters which are duplicates", function () {
        var results = count_duplicates_1.countDuplicates("abcdeffghijk 1234a", false, false);
        expect(results).toEqual({
            a: 2,
            f: 2
        });
    });
    it("should not count upper case and lower case as the same if ignore case is false", function () {
        var results = count_duplicates_1.countDuplicates("aAbBcCDDdd", false, false);
        expect(results).toEqual({
            D: 2,
            d: 2
        });
    });
    it("should count upper case and lower case as the same if ignore case is true", function () {
        var results = count_duplicates_1.countDuplicates("aAbBcCDDdd", true, false);
        expect(results).toEqual({
            a: 2,
            b: 2,
            c: 2,
            d: 4
        });
    });
    it("should output whitespace as duplicate if ignore whitespace is false", function () {
        var results = count_duplicates_1.countDuplicates("12  344", true, false);
        expect(results).toEqual({
            ' ': 2,
            '4': 2
        });
    });
    it("should not output whitespace as duplicate if ignore whitespace is true", function () {
        var results = count_duplicates_1.countDuplicates("12  344", true, true);
        expect(results).toEqual({
            '4': 2
        });
    });
});
