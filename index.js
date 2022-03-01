
function receivesAFunction(callback) {
    return callback();
}
const returnsANamedFunction = function namedFunc() {
    return returnsANamedFunction;
}

function returnsAnAnonymousFunction() {
    return () => {}
}