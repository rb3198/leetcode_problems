/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const openingParanthesisMap = new Map([
    ["{", 0],
    ["(", 1],
    ["[", 2],
  ]);
  const openingParanthesis = ["{", "(", "["];
  const closingParanthesisMap = new Map([
    ["}", 0],
    [")", 1],
    ["]", 2],
  ]);
  const closingParanthesis = ["}", ")", "]"];
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (openingParanthesis.includes(s[i])) {
      stack.push(s[i]);
    } else if (closingParanthesis.includes(s[i])) {
      const opening = stack.pop();
      if (
        closingParanthesisMap.get(s[i]) !== openingParanthesisMap.get(opening)
      ) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

/**
 * Question only contains strings with brackets
 * @param {string} s
 * @return {boolean}
 */
const isValidOptimisedForQuestion = (s) => {
  if (s.length % 2 !== 0) {
    return false;
  }
  const stack = [];
  const paranthesisMap = new Map([
    ["}", "{"],
    [")", "("],
    ["]", "["],
  ]);
  const openingParanthesis = ["{", "(", "["];
  const closingParanthesis = ["}", ")", "]"];
  for (let i = 0; i < s.length; i++) {
    const paranthesis = s[i];
    if (openingParanthesis.includes(paranthesis)) {
      stack.push(paranthesis);
    }
    if (closingParanthesis.includes(paranthesis)) {
      const opening = stack.pop(paranthesis);
      if (opening !== paranthesisMap.get(paranthesis)) {
        return false;
      }
    }
  }
  return true;
};

console.log(isValid("(Hello World)"));
console.log(isValidOptimisedForQuestion("(])()["));
