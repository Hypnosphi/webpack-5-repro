function noop() {}

function B({foo = noop}) {}

console.log(B)

export default B
