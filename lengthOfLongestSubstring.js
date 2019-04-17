/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let res = 0;
  let arr = [];
  for (let i = 0; i < s.length; ++i) {
    arr.push(s[i]);
    if (arr.includes(s[i + 1])) {
      if (res < arr.length) res = arr.length;
      arr = arr.slice(arr.indexOf(s[i + 1]) + 1);
    }
  }
  return res < arr.length ? arr.length : res;
};
console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring('dvdef'));
