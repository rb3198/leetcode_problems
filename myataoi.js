const MAX_32_BIT_INTEGER = 2 ** 31 - 1;
const MIN_32_BIT_INTEGER = -1 * 2 ** 31;

const isSign = (s) => s === "+" || s === "-";

const isNumber = (s) => {
  const n = parseInt(s);
  return n === 0 || !!n;
};

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = (s) => {
  let isNegative = false;
  let parsed = "";
  let numberReadingStarted = false;
  for (let i = 0; i < s.length; i++) {
    const el = s[i];
    if (!numberReadingStarted && !isNumber(el) && !isSign(el) && el !== ".") {
      // Ignore non-integer digits, break if words are found
      if (/[A-Za-z]/.test(el)) {
        break;
      }
      continue;
    }
    if (isSign(el) && !numberReadingStarted) {
      // First character, check for sign
      isNegative = el === "-";
      numberReadingStarted = true;
      continue;
    }
    numberReadingStarted = true;
    const digit = parseInt(el);
    if (!digit && digit !== 0) {
      break;
    }
    parsed += digit;
  }
  if (parsed.length === 0) {
    return 0;
  }
  const parsedInt = isNegative ? -parseInt(parsed) : parseInt(parsed);
  if (parsedInt > MAX_32_BIT_INTEGER) {
    return MAX_32_BIT_INTEGER;
  }
  if (parsedInt < MIN_32_BIT_INTEGER) {
    return MIN_32_BIT_INTEGER;
  }
  return parsedInt;
};

console.log(myAtoi("31.1"));
console.log(myAtoi("+-12"));
console.log(myAtoi("___-42"));
