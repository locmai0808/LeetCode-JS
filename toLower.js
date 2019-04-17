/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  str = str
    .split('')
    .map(char =>
      char >= 'A' && char <= 'Z'
        ? String.fromCharCode(char.charCodeAt(0) + 32)
        : char
    )
    .join('');
  return str;
};

console.log(toLowerCase('Hello Loc Mai'));
