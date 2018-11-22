function zip(props) {
    function Class(...args) {
        this.__args = args;
    }

    let keys = Object.keys(props);
    keys.forEach((key) => {
        Class.prototype[key] = function (...args) {
            return props[key].apply(this, [...this.__args, ...args]);
        };
    });

    return (...args) => new Class(...args);
}

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

let N = zip({add, sub});

// console.log(N(9).add(8).sub(5)); // 17
console.log(N(3).sub(5)); // -2
