import { getStringInfo, toLowerCase, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return upper case string", () => {
    // arrange
    const sut = toUpperCase;
    const expected = "BAOHADEPTRAIVC";
    // act
    const actual = sut("baohadepTraiVc");
    // assert
    expect(actual).toBe(expected);
  });

  it("should return lower case string", () => {
    const sut = toLowerCase;
    const expected = "clementine";

    const actual = sut("CleMenTiNe");

    expect(actual).toBe(expected);
  });

  it("should return string info", () => {
    const sut = getStringInfo;
    const expected = {
      lowerCase: "clementine",
      upperCase: "CLEMENTINE",
      characters: ["C", "l", "e", "M", "e", "n", "T", "i", "N", "e"],
      length: 10,
      extraInfo: {},
    };

    const actual = sut("CleMenTiNe");

    expect(actual).toEqual(expected);
    expect(actual.characters).toHaveLength(10);
    expect(actual.characters).toContain<string>("T");
    expect(actual.characters).toEqual(
      expect.arrayContaining(["n", "T", "i", "N", "e", "C", "l", "M", "e"])
    );

    expect(actual.extraInfo).toBeDefined();
    expect(actual.extraInfo).toBeTruthy();
    expect(actual.extraInfo).not.toBeUndefined();
    expect(actual.extraInfo).not.toBe(undefined);
  });
});
