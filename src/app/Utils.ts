import { stringInfo } from "./types";

class StringUtils {
  public toUpperCase = (arg: string) => arg.toUpperCase();
}

const toUpperCase = (arg: string) => arg.toUpperCase();
const toLowerCase = (arg: string) => arg.toLowerCase();
const getStringInfo = (arg: string): stringInfo => {
  const lowerCase = arg.toLowerCase();
  const upperCase = arg.toUpperCase();
  const characters = Array.from(arg);
  const length = arg.length;
  const extraInfo = {};
  return { lowerCase, upperCase, characters, length, extraInfo };
};

export { StringUtils, toUpperCase, toLowerCase, getStringInfo };
