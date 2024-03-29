var removeOuterParentheses = function(S) {
  let t = 0;
  let res = '';
  for (let i = 0; i < S.length; ++i) {
    if (S[i] === '(') {
      t++;
    } else {
      t--;
    }

    if ((t === 1 && S[i] === '(') || (t === 0 && S[i] === ')')) continue;
    res += S[i];
  }
  return res;
};

console.log(removeOuterParentheses('(()())(())'));
// (()())(())
// 1212101210
// -2121--21-
