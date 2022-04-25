const funcs = require("./modules.cjs")


// CURRYING
const curriedSum = funcs.currying(funcs.sum);
console.log(curriedSum(2)(3)(5));

const add2 = curriedSum(2)
const add3 = add2(3)
const add5 = add3(5);
console.log(add5);