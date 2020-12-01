const copyAndPush = (arr, entry) => {
  const arrCopy = [...arr];

  arrCopy.push(entry);

  return arrCopy;
}

module.exports = {
  copyAndPush
}