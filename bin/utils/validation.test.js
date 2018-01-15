let {isRealString} = require('./validation');

describe('isRealString', () => {
  test('should reject non-string values', () => {
    let realString = isRealString(12);

    expect(realString).toBeFalsy()
  });

  test('should reject string with only white spaces', () => {
    let realString = isRealString('   ');

    expect(realString).toBeFalsy()
  });

  test('should allow strings with non-space characters', () => {
    let realString = isRealString(' Andrew ');

    expect(realString).toBeDefined()
  });
});