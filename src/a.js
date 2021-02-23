function noop() {}

function A({foo = noop}) {}

console.log(A)

export default A
