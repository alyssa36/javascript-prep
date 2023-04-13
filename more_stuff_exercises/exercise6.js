function allMatches(array, regex) {
  let matches = [];
  
  array.forEach(function(word) {
    if (regex.test(word)) {
      matches.push(word)
    }
  })
  return matches;
}




let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // => ['laboratory', 'flab', 'elaborate']