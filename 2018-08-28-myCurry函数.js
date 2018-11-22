var log = console.log;

var person = [{
    name: 'kevin'
}, {
    name: 'daisy'
}];

var prop = curry(function (key, obj) {
    return obj[key];
});

var name = person.map(prop('name'));
console.log(name);

// log(prop('name',{
//     name: 'kevin'
// }));

// fn("a", _, "c")("b")

function curry(...arg) {
    let fn = arg[0];

    let params = arg.slice(1);
    let fnLen = fn.length;

    return function wrap(...leftArg) {
        // 必须知道参数长度
        let leftLen = leftArg.length;

        if (params.length + leftLen >= fnLen) {
            return fn.apply(null, [...params, ...leftArg]);
        }

        // 已有的参数；
        params = params.concat(leftArg);

        return wrap;

    };
}
