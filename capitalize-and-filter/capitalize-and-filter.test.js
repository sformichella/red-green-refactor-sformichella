const { capitalizeAndFilter } = require('./capitalize-and-filter');

const strings = ['apple', 'napkin', 'fire']

describe('capitalizeAndFilter', () => {
  it('it should capitalize every string', () => {
    const expected = ['APPLE', 'NAPKIN', 'FIRE'];
    const actual = capitalizeAndFilter(strings);

    expect(actual).toEqual(expected);
  });
});