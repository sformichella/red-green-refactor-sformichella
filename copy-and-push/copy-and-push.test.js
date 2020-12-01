const { copyAndPush } = require('./copy-and-push');

describe('copyAndPush', () => {
  it('should add an item to an array', () => {
    const array = [1, 2, 3];

    const result = copyAndPush(array, 4);
    const expected = [1, 2, 3, 4];

    expect(result).toEqual(expected);
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3];

    const result = copyAndPush(array, 4);

    expect(array).toEqual([1, 2, 3]);
  })
});