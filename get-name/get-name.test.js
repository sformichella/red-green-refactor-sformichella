const { getName } = require('./get-name');

const namedObject = {
  name: 'Terence Tao',
  occupation: 'mathematician'
}

describe('getName', () => {
  it('should return "Terence Tao"', () => {

    const { name: expected } = namedObject;
    const actual = getName(namedObject);

    expect(actual).toEqual(expected);
  });

  it('should return a string', () => {
    const expected = 'string';
    const actual = getName(namedObject);

    expect(typeof actual).toEqual(expected);
  });

  it('should throw an error if there is no name', () => {
    expect(() => getName({}))
      .toThrow('No name or not a strin')
  });
});