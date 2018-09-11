function reduce(fn) {
    return function (...args) {
        return args.reduce(fn.bind(this));
    };
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

function concat(arr1, arr2) {
    return arr1.concat(arr2);
}

add = reduce(add);
mul = reduce(mul);
concat = reduce(concat);

console.log(add(1, 2, 3), // 6
    mul(1, 2, 3, 4), // 24
    concat([1, 2], [3, 4], [5, 6])); // [1,2,3,4,5,6]
