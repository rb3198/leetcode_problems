/**
 * @param {string} s
 * @return {number}
 */
const minDeletions = (s) => {
  /**
   * @type {Map<string, number>} map storing the frequencies of each character in the string
   */
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char) + 1);
    }
  }
  const freqs = Array.from(map.values());
  const freqMap = new Map();
  for (let i = 0; i < freqs.length; i++) {
    const freq = freqs[i];
    if (freqMap.has(freq)) {
      freqMap.set(freq, freqMap.get(freq) + 1);
    } else {
      freqMap.set(freq, 1);
    }
  }
  const n = freqs.length;
  let deletions = 0;
  for (let i = 0; i < n; i++) {
    while (freqMap.get(freqs[i]) && freqMap.get(freqs[i]) > 1) {
      freqMap.set(freqs[i], freqMap.get(freqs[i]) - 1);
      freqs[i]--;
      deletions++;
      freqs[i] !== 0 && freqMap.set(freqs[i], (freqMap.get(freqs[i]) ?? 0) + 1);
    }
    freqMap.set(freqs[i], 1);
  }
  return deletions;
};

/**
 * @param {string} s
 * @return {number}
 */
const minDeletions1 = function (s) {
  let arr = Array(26).fill(0);
  let deletions = 0;

  for (let i = 0; i < s.length; i++) {
    let index = s[i].charCodeAt(0) - "a".charCodeAt(0);
    arr[index]++;
  }

  arr.sort((a, b) => b - a);
  for (let i = 1; i < 26; i++) {
    while (arr[i] && arr[i] >= arr[i - 1]) {
      arr[i]--;
      deletions++;
    }
  }

  return deletions;
};

console.log(minDeletions1("ceabaacb"));
console.log(minDeletions1("bbcebab"));
