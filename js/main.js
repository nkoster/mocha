const
    aap = require('./util/aap'),
    flat = require('./util/flat-array'),
    geoip = require('./util/geoip')

console.log(aap())
console.log(flat([[1,2],[3,4]]))
console.log(geoip.int2ip(16777216))
console.log(geoip.ip2int('1.0.0.0'))
