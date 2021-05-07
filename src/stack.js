var _ = require('underscore');

let stack = [];

exports.push = function (x) {
    stack.push(x);
};

exports.pop = function () {
    return stack.shift();
}

exports.peek = function () {
    return _.last(stack);
}
