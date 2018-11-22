// 惰性加载函数
let addEventLazy = function (el, type, handler) {
    if (window.addEventListener) {
        // 一旦进入分支，便在函数内部修改函数的实现
        addEventLazy = function (el, type, handler) {
            el.addEventListener(type, handler, false);
        };
    }
    else if (window.attachEvent) {
        addEventLazy = function (el, type, handler) {
            el.attachEvent(`on${type}`, handler);
        };
    }

    addEventLazy(el, type, handler);
};
addEventLazy(document.getElementById('eventLazy'), 'click', function () {
    console.log('lazy ');
});
