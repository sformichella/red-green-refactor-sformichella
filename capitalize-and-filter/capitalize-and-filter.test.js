const { capitalizeAndFilter } = require('./capitalize-and-filter');

const stringsWithFWord = ['apple', 'napkin', 'fire'];
const stringsWithoutFWord = ['apple', 'napkin'];

describe('capitalizeAndFilter', () => {
  it('it should capitalize every string', () => {
    const expected = ['APPLE', 'NAPKIN'];
    const actual = capitalizeAndFilter(stringsWithoutFWord);

    expect(actual).toEqual(expected);
  });

  it('should filter out strings that start with f', () => {
    const expected = ['APPLE', 'NAPKIN'];
    const actual = capitalizeAndFilter(stringsWithFWord);

    expect(actual).toEqual(expected);
  });
});