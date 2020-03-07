const
    geoip = require('../js/geoip'),
    expect = require('chai').expect

describe('geoip', _ => {
    context('geoip.int2ip test', _ => {
        it('should return ip 1.0.0.0', done => {
            expect(geoip.int2ip(16777216)).to.equal('1.0.0.0')
            done()
        })
    })
    context('geoip.ip2int test', _ => {
        it('should return int 16777216', done => {
            expect(geoip.ip2int('1.0.0.0')).to.equal(16777216)
            done()
        })
    })
})
