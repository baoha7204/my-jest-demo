import {
  StringUtils,
  getStringInfo,
  toLowerCase,
  toUpperCase,
} from "../app/Utils";

describe("Utils test suite", () => {
  describe.only("StringUtils tests should", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log("Setup");
    });

    afterEach(() => {
      // clearing mocks
      console.log("Teardown");
    });

    it("Return correct upperCase", () => {
      const actual = sut.toUpperCase("abc");

      expect(actual).toBe("ABC");
      console.log("Actual test");
    });
  });
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

  describe("toUpperCase examples", () => {
    it.each([
      { input: "baohadepTraiVc", expected: "BAOHADEPTRAIVC" },
      { input: "CleMenTiNe", expected: "CLEMENTINE" },
      { input: "baoHa", expected: "BAOHA" },
    ])("$input toUpperCase should be $expected", ({ input, expected }) => {
      const sut = toUpperCase;

      const actual = sut(input);

      expect(actual).toBe(expected);
    });
  });

  describe("getStringInfo for arg CleMenTiNe should", () => {
    it("return right length", () => {
      const sut = getStringInfo;
      const expected = 10;

      const actual = sut("CleMenTiNe");

      expect(actual.length).toBe(expected);
    });

    it("return right lower case", () => {
      const sut = getStringInfo;
      const expected = "clementine";

      const actual = sut("CleMenTiNe");

      expect(actual.lowerCase).toBe(expected);
    });

    it("return right upper case", () => {
      const sut = getStringInfo;
      const expected = "CLEMENTINE";

      const actual = sut("CleMenTiNe");

      expect(actual.upperCase).toBe(expected);
    });

    it("return right characters", () => {
      const sut = getStringInfo;
      const expected = ["C", "l", "e", "M", "e", "n", "T", "i", "N", "e"];

      const actual = sut("CleMenTiNe");

      expect(actual.characters).toContain<string>("T");
      expect(actual.characters).toEqual(
        expect.arrayContaining(["n", "T", "i", "N", "e", "C", "l", "M", "e"])
      );
      expect(actual.characters).toEqual(expected);
    });

    it("return defined extra info", () => {
      const sut = getStringInfo;

      const actual = sut("CleMenTiNe");

      expect(actual.extraInfo).toBeDefined();
      expect(actual.extraInfo).not.toBeUndefined();
    });

    it("return right extra info", () => {
      const sut = getStringInfo;
      const expected = {};

      const actual = sut("CleMenTiNe");

      expect(actual.extraInfo).toEqual(expected);
    });
  });
});
