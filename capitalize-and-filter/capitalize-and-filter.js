const capitalizeAndFilter = arrOfStrings => {
  const accArr = [];

  for(let i = 0; i < arrOfStrings.length; i++) {
    const str = arrOfStrings[i].toUpperCase();
    const firstLetter = str[0];

    if(firstLetter !== 'F') accArr.push(str)
  }

  return accArr;
}

module.exports = {
  capitalizeAndFilter
}