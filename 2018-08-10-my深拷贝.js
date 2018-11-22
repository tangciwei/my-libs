function deepCopy(obj) {

    if (typeof obj === 'object' && obj !== null) {
        let copy = {};
        if (Array.isArray(obj)) {
            copy = [];
            obj.forEach(item => {
                copy.push(deepCopy(item));
            });
        }
        else {
            // 如果是对象
            for (let k in obj) {
                let val = obj[k];
                copy[k] = deepCopy(val);
            }
        }
        return copy;
    }

    // 函数和其他
    return obj;
}

let obj = {
    a: [1, 2],
    b: [
        {
            key: 1
        },
        [
            2, 3
        ],
        4
    ],
    c: {
        aa: 8,
        bb: [2, 4]

    },
    e: function () {
        return 'eee';
    }
};

let copy = deepCopy(obj);

obj.a.push(3);
obj.a = [5, 6];
obj.b[1].key = 4;
obj.e = 66;

console.log(copy);
