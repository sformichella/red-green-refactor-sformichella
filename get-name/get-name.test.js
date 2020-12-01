const { getName } = require('./get-name');

describe('getName', () => {
  it('should return "Terence Tao"', () => {

    const namedObject = {
      name: 'Terence Tao',
      occupation: 'mathematician'
    }

    const { name: expected } = namedObject;
    const actual = getName(namedObject);

    expect(actual).toEqual(expected);
  });


});