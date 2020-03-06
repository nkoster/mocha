module.exports = a => {
    let t = []
    const flat = item => {
        if (item.constructor === Array) {
            for (let i = 0; i < item.length; i++) {
                flat(item[i])
            }
        } else {
            t.push(item)
        }
    }
    flat(a)
    return t
}
