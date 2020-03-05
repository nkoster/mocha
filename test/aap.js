const
    aap = require('../js/aap'),
    expect = require('chai').expect

describe('#aap()', _ => {
    context('aap test', _ => {
        it('should return aap', done => {
            expect(aap()).to.equal('aap')
            done()
        })
    })
})
