
Promise.resolve().then(function () {
    console.log('then');
});
process.nextTick(function () {
    console.log('nextTick');
});
// 结果打印：nextTick then

// 再加一个宏任务呢
setImmediate(function () {
    console.log('setImmediate');
});
// 结果打印：nextTick  then  setImmediate
// nextTick 会比 其他微任务、宏任务执行快
