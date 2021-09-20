const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(''));
  console.log(horizontalJoin);

  for (l of horizontalJoin) {
    if (l.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;
