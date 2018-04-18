const expect = require('expect'),
      {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non string value', () => {
        let isValidate = isRealString(98);

        expect(isValidate).toBe(false);
    });

    it('should reject string with only spaces', () => {
        let isValidate = isRealString('   ');

        expect(isValidate).toBe(false);
    });

    it('should allow string with non space characters', () => {
        let isValidate = isRealString('  Vicente   ');

        expect(isValidate).toBe(true);
    });
});