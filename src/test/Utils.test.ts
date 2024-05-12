import { toLowerCase, toUpperCase } from "../app/Utils";

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
});

describe("Utils test suite", () => {
  it("should return lower case string", () => {
    const sut = toLowerCase;
    const expected = "clementine";

    const actual = sut("CleMenTiNe");

    expect(actual).toBe(expected);
  });
});
