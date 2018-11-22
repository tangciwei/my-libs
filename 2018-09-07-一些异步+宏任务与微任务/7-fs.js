let fs = require('fs');
fs.readFile('./1/log', function () {
    console.log('fs');
});

new Promise(function executor(resolve) {
    console.log(111);
    resolve();
}).then(function () {
    console.log(333333);
});

setTimeout(function () {
    console.log(4444);
}, 0);

process.nextTick(function () {
    console.log('22222');
});
// 结果打印：text  fs
