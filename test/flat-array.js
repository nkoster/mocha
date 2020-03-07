const
    flatArray = require('../js/util/flat-array'),
    expect = require('chai').expect

describe('flatArray()', _ => {
    context('flat array test', _ => {
        it('should return a flat array', done => {
            expect(flatArray([[1,2],[3,4]])).to.eql([1,2,3,4])
            done()
        })
    })
})
