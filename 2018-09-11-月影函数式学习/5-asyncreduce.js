function reduce(fn, async) {
    if (async) {
        return function (...args) {
            return args.reduce((a, b) => {
                return Promise.resolve(a).then((v) => fn.call(this, v, b));
            });
        };
    }
    else {
        return function (...args) {
            return args.reduce(fn.bind(this));
        };
    }
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

function asyncAdd(x, y) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(x + y), 1000);
    });
}

add = reduce(add);
mul = reduce(mul);
concat = reduce(concat);

console.log(add(1, 2, 3), // 6
    mul(1, 2, 3, 4), // 24
    concat([1, 2], [3, 4], [5, 6])); // [1,2,3,4,5,6]

asyncAdd = reduce(asyncAdd, true);
asyncAdd(1, 2, 3).then((v) => console.log(v));
