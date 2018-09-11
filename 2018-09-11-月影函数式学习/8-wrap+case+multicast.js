function setColor(el, color) {
    return el.style.color = color;
}

function setFontSize(el, size) {
    return el.style.fontSize = size;
}

function multicast(fn) {
    return function (list, ...args) {
        if (Array.isArray(list)) {
            return list.map((item) => fn.apply(this, [item, ...args]));
        }
        else {
            return fn.apply(this, [list, ...args]);
        }
    };
}

function wrap(before, fn, after) {
    return function (...args) {
        if (before) {
            args = before.apply(this, args);
        }

        let ret = fn.apply(this, args);
        if (after) {
            ret = after.call(this, [ret, ...args]);
        }

        return ret;
    };
}
// 执行wrap,定义before,和fn;
// before目的：参数进行格式化；以便传给真正的fn;真正的显然就必须是multicast(fn);
function cast(fn) {
    return wrap((...args) => {
        if (typeof args[0] === 'string') {
            args[0] = Array.from(document.querySelectorAll(args[0]));
        }

        return args;
    }, multicast(fn));
}
[setColor, setFontSize] = multicast(cast)([setColor, setFontSize]);

setColor('li:nth-child(2n+1)', 'red');

setFontSize('li:nth-child(2n+1)', '32px');
