const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(''));

  for (l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else {
      let reverse = l.split('').reverse();
      let reverseStr = reverse.join('');
      if (reverseStr.includes(word)) {
        return true;
      }
    }
  }

  return false;
};

C - Swain;

// wordSearch(
//   [
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'Y', 'T', 'T', 'I', 'K', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ],
//   'KITTY'
// );

module.exports = wordSearch;
