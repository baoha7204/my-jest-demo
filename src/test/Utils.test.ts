import { toLowerCase, toUpperCase } from "../app/Utils";

describe("Utils test suite", () => {
  it("should return upper case string", () => {
    const result = toUpperCase("baohadepTraiVc");
    expect(result).toBe("BAOHADEPTRAIVC");
  });
});

describe("Utils test suite", () => {
  it("should return lower case string", () => {
    const result = toLowerCase("CleMenTiNe");
    expect(result).toBe("clementine");
  });
});
