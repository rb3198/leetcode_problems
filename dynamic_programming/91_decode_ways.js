/**
 * Intuition:
 *
 * At every index, check if current char is 0.
 * - If 0, then no further decodings can be generated.
 * - Else, continue with 1. generating a decoding considering current char as single, 2. pairing with the next char and going to index + 2.
 * Memoize the decodings generated from the current index onward.
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
  if (s[0] === "0") {
    return 0;
  }
  const mem = new Array(s.length);
  const generateDecodings = (index) => {
    if (index >= s.length) {
      return 1;
    }
    if (s[index] === "0") {
      return 0;
    }
    if (mem[index]) {
      return mem[index];
    }
    // individual
    let res = generateDecodings(index + 1);
    if (
      index < s.length - 1 &&
      (s[index] === "1" || (s[index] === "2" && s[index + 1] < "7"))
    ) {
      // pair with the next index
      res += generateDecodings(index + 2);
    }
    mem[index] = res;
    return res;
  };
  return generateDecodings(0);
};

console.log(numDecodings("12"));
console.log(numDecodings("226"));
console.log(numDecodings("06"));
console.log(numDecodings("10"));
console.log(numDecodings("123700532"));
console.log(numDecodings("2101"));
console.log(numDecodings("111111111111111111111111111111111111111111111"));

/*
1 - 1 way to decode
11 - 2 ways to decode (AA, K)
111 - 3 ways to decode (AAA, KA, AK)
1111 - AAAA, KK, KAA, AKA, AAK, KAA
 */
