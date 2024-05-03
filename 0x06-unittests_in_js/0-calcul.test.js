const calculateNumber = require('./0-calcul');

const assert = require('assert')
const mocha = require('mocha');

describe('calculateNmumber', function () {
    it('should return the sum of two numbers', function () {
        assert.strictEqual(calculateNumber(2, 4), 6);
        assert.strictEqual(calculateNumber(1, -1), 0);
        assert.strictEqual(calculateNumber(1, -3), -2);
    });

    it('should round floats', function () {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
        assert.strictEqual(calculateNumber(3.6, 2.4), 6);
        assert.strictEqual(calculateNumber(0.1, 0), 0);
        assert.strictEqual(calculateNumber(1.4, -4.5), -3);

    });

    it('should return rounded number if only one is provided ', function () {
        assert.strictEqual(calculateNumber(2), 2);
        assert.strictEqual(calculateNumber(2.7), 3);
    });

    it('should cast non-numbers into numbers', function () {
        assert.strictEqual(calculateNumber(1, '3'), 4);
        assert.strictEqual(calculateNumber(1.3, '3.7'), 5);
        assert.strictEqual(calculateNumber(true, '3'), 4);
    });

    it('should throw typeerror if either param cannot be coerced', function () {
        assert.throws(() => calculateNumber('hello'), {
            name: 'TypeError',
            message: 'Parameters must be numbers'
        });
        assert.throws(() => calculateNumber(1.2, 'dog'), {
            name: 'TypeError',
            message: 'Parameters must be numbers'
        });
    });

});
