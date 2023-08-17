module.exports = function reverse (n) {
    const pattern = /^-|0$/g;
    return +`${n}`.replace(pattern, '').split('').reverse().join("")
}
