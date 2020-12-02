const capitalizeAndFilter = arrOfStrings => {
  return arrOfStrings
    .map(string => string.toUpperCase())
    .filter(string => string[0] !== 'F');
}

module.exports = {
  capitalizeAndFilter
}