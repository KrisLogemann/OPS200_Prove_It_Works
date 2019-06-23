const expect = require('chai').expect;
const Mortgage = require('../../src/js/Mortgage');

describe('Mortgage Calculator', () => {
  let mortgage = null;

  beforeEach(() => {
    mortgage = new Mortgage(423000, 3.4, 30, 12);
  });

  it('should have a monthlyPayment function', () => {
    expect(mortgage.monthlyPayment).to.exist;
  });

  it('monthlyPayment() should not return NaN', () => {
    const result = mortgage.monthlyPayment();
    expect(result).to.not.be.NaN;
  });

  it('monthlyPayment() should not be negative', () => {
    const result = mortgage.monthlyPayment();
    expect(result >= 0).to.be.true;
  });

  it('monthlyPayment() should correctly calculate monthly payment', () => {
    const result = mortgage.monthlyPayment();
    expect(result).to.equal('1875.93');
  });
});
