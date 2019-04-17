const isValid = ip => {
  if (!ip.includes('.')) return false;

  let d = ip.split('.');
  for (let i = 0; i < d.length; i++) {
    if (
      d[i].length > 3 ||
      parseInt(d[i]) < 0 ||
      parseInt(d[i]) > 255 ||
      isNaN(parseInt(d[i]))
    )
      return false;
    if (d[i].length > 1 && parseInt(d[i]) === 0) return false;
    if (d[i].length > 1 && parseInt(d[i]) !== 0 && d[i][0] === '0')
      return false;
  }
  return true;
};

const IPgenerator = s => {
  if (s.length > 12 || s.length < 4) return [];
  let res = [];
  let temp = s;
  for (let i = 1; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      for (let k = j + 1; k < s.length; k++) {
        temp = temp.substring(0, k) + '.' + temp.substring(k);
        temp = temp.substring(0, j) + '.' + temp.substring(j);
        temp = temp.substring(0, i) + '.' + temp.substring(i);
        if (isValid(temp)) res.push(temp);
        temp = s;
      }
    }
  }
  return res;
};

console.log(IPgenerator('25512312333'));
