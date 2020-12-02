const capitalizeAndFilter = arrOfStrings => {
  for(let i = 0; i < arrOfStrings.length; i++) {
    const str = arrOfStrings[i];

    arrOfStrings[i] = str.toUpperCase();
  }

  return arrOfStrings;
}

module.exports = {
  capitalizeAndFilter
}