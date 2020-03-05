const
    sum = require('../js/sum'),
    expect = require('chai').expect

describe('#sum()', _ => {
    context('aap test', _ => {
        it('should return aap', done => {
            expect(sum()).to.equal('aap')
            done()
        })
    })
})
