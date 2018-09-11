function add(...args) {
    return args.reduce((x, y) => x + y);
}

function mul(...args) {
    return args.reduce((x, y) => x * y);
}

function concat(...args) {
    return args.reduce((arr1, arr2) => arr1.concat(arr2));
}

console.log(add(1, 2, 3), // 6
    mul(1, 2, 3, 4), // 24
    concat([1, 2], [3, 4], [5, 6])); // [1,2,3,4,5,6]
