// function named cleanSet that returns a string of all the set values
// that start with a specific string (startString).

export default function cleanSet(set, startString) {
  let word = '';
  const array = [];

  if (startString && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        array.push(element.slice(startString.length));
      }
    }
    word = array.join('-');
  }
  return word;
}
