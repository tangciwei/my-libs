function reduce(fn, ...args) {
    return args.reduce(fn);
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

console.log(reduce(add, 1, 2, 3), // 6
    reduce(mul, 1, 2, 3, 4), // 24
    reduce(concat, [1, 2], [3, 4], [5, 6])); // [1,2,3,4,5,6]
