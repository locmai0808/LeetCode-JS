/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  let mcode = [
    '.-',
    '-...',
    '-.-.',
    '-..',
    '.',
    '..-.',
    '--.',
    '....',
    '..',
    '.---',
    '-.-',
    '.-..',
    '--',
    '-.',
    '---',
    '.--.',
    '--.-',
    '.-.',
    '...',
    '-',
    '..-',
    '...-',
    '.--',
    '-..-',
    '-.--',
    '--..'
  ];

  return words
    .map(word =>
      word
        .split('')
        .map(letter => mcode[letter.charCodeAt(0) - 97])
        .join('')
    )
    .filter((e, i, a) => i == a.indexOf(e)).length;
};

console.log(uniqueMorseRepresentations(['gin', 'zen', 'gig', 'msg']));
