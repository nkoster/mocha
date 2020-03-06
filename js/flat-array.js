module.exports = arr => {
    if (arr.constructor === Array) {
        let newArr = []
        const flat = item => {
            if (item.constructor === Array) {
                for (let i = 0; i < item.length; i++) {
                    flat(item[i])
                }
            } else {
                newArr.push(item)
            }
        }
        flat(arr)
        return newArr
    } else {
        return arr
    }
}
