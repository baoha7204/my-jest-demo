import {
  StringUtils,
  getStringInfo,
  toLowerCase,
  toUpperCase,
} from "../app/Utils";

describe("Utils test suite", () => {
  describe("StringUtils tests should", () => {
    let sut: StringUtils;

    beforeEach(() => {
      sut = new StringUtils();
      console.log("Setup");
    });

    afterEach(() => {
      // clearing mocks
      console.log("Teardown");
    });

    it("return correct upperCase", () => {
      const actual = sut.toUpperCase("abc");

      expect(actual).toBe("ABC");
      console.log("Actual test");
    });

    it("throw error when arg is empty - arrow function", () => {
      const exepectError = () => sut.toUpperCase("");
      expect(exepectError).toThrow("Argument is required!");
    });

    it("throw error when arg is empty - function", () => {
      function expectError() {
        sut.toUpperCase("");
      }
      expect(expectError).toThrow("Argument is required!");
    });

    it("throw error when arg is empty - try catch block", () => {
      try {
        sut.toUpperCase("");
        fail("Should throw error for invalid arg!");
      } catch (error) {
        expect(error).toBeInstanceOf(Error);
        expect(error).toHaveProperty("message", "Argument is required!");
      }
    });
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
