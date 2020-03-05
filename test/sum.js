const
    sum = require('../js/sum'),
    expect = require('chai').expect

describe('#sum()', _ => {
    context('without arguments', _ => {
        it('should return 0', _ => {
            expect(sum()).to.equal(0)
        })
    })
    context('with number arguments', _ => {
        it('should return sum of arguments', _ => {
            expect(sum(1, 2, 3, 4, 5)).to.equal(15)
        })
        it('should return argument when only one argument is passed', _ => {
            expect(sum(5)).to.equal(5)
        })
    })
    context('with non-number arguments', _ => {
        it('should throw error', _ => {
            expect(_ => {
            sum(1, 2, '3', [4], 5)
        }).to.throw(TypeError, 'sum() expects only numbers.')
    })
  })
})
