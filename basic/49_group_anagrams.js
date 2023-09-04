/**
 * Intuition:
 * - Construct a string containing 26 letters, each signifying the number of occurences of the letter in the string. ex: 0,1,0,0,2,0,... for the word "bee"
 * - Construct a map of count representations, key - count representation string, value - all the strings which have the same representation string
 * - Iterate through the values of the map and return the 2D array
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
  const strLetterMaps = [];
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  for (let i = 0; i < strs.length; i++) {
    const el = strs[i];
    const letterArr = new Array(26).fill(0);
    for (let j = 0; j < el.length; j++) {
      const letterIndex = letters.indexOf(el[j]);
      letterArr[letterIndex] += 1;
    }
    strLetterMaps.push(letterArr.join(","));
  }
  /**
   * @type {Map<string, string[]>} Map of <strLetterMap, str[]>
   */
  const map = new Map();
  for (let i = 0; i < strLetterMaps.length; i++) {
    if (map.has(strLetterMaps[i])) {
      const strings = map.get(strLetterMaps[i]);
      strings.push(strs[i]);
      map.set(strLetterMaps[i], strings);
    } else {
      map.set(strLetterMaps[i], [strs[i]]);
    }
  }
  const final = [];
  for (const value of map.values()) {
    final.push(value);
  }
  return final;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"]));
