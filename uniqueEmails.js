/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let arr = {};
  let res = 0;
  for (let i = 0; i < emails.length; i++) {
    let temp = emails[i].split('@');
    temp[0] = temp[0].replace(/\./g, '').split('+')[0];
    let email = temp.join('@');
    if (!arr[email]) {
      res++;
      arr[email] = 1;
    }
  }
  return res;
};

console.log(
  numUniqueEmails([
    'test.email+alex@leetcode.com',
    'test.e.mail+bob.cathy@leetcode.com',
    'testemail+david@lee.tcode.com'
  ])
);
