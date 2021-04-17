import { countDuplicates } from '../src/count-duplicates';

describe("Count Duplicate Letters", () => {
  it("should count and return only letters which are duplicates", () => {
    const results = countDuplicates("abcdeffghijk 1234a", false, false);
    expect(results).toEqual({
      a: 2,
      f: 2
    })
  });

  it("should not count upper case and lower case as the same if ignore case is false", () => {
    const results = countDuplicates("aAbBcCDDdd", false, false);
    expect(results).toEqual({
      D: 2,
      d: 2
    })
  });

  it("should count upper case and lower case as the same if ignore case is true", () => {
    const results = countDuplicates("aAbBcCDDdd", true, false);
    expect(results).toEqual({
      a: 2,
      b: 2,
      c: 2,
      d: 4
    })
  });

  it("should output whitespace as duplicate if ignore whitespace is false", () => {
    const results = countDuplicates("12  344", true, false);
    expect(results).toEqual({
      ' ': 2,
      '4': 2
    })
  });

  it("should not output whitespace as duplicate if ignore whitespace is true", () => {
    const results = countDuplicates("12  344", true, true);
    expect(results).toEqual({
      '4': 2
    })
  });
})