const
    sum = require('../js/sum'),
    expect = require('chai').expect

describe('#sum()', _ => {
    context('aap test', _ => {
        it('should return aap', _ => {
            expect(sum()).to.be = 'aap'
        })
    })
})
