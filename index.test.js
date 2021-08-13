const {
  add,
} = require('./index.js')

describe('add', () => {
  it('should add two numbers togethers', () => {
    const actual1 = add(7, 3);
    const expected1 = 10;
    expect(actual1).toBe(expected1);

    const actual2 = add(6, 13);
    const expected2 = 19;
    expect(actual2).toBe(expected2);
  })

  it('should handle two numbers in string format', () => {
    const actual = add('7', '3');
    const expected = 10;
    expect(actual).toBe(expected)
  })
})