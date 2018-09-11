async function asyncAdd(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(a + b);
        }, 500);
    });
}

function asyncReduce(fn) {
    return async function (arr) {
        return arr.reduce((old, newOne) => {
            // 简化
            return Promise.resolve(old).then((data) => {
                return fn.call(this, data, newOne);
            });
            // return new Promise((resolve) => {
            //     Promise.resolve(old).then(data => {
            //         resolve(fn(data, newOne));
            //     });
            // });
        });
    };
}

asyncReduce(asyncAdd)([1, 2, 3]).then(data => {
    console.log(data);
});
