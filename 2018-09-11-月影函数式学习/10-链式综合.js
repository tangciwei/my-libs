
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
function wrap(fn, before, after) {
    return function (...args) {
        if (before) {
            args = before.apply(this, args);
        }

        let ret = fn.apply(this, args);
        // args: [Array(4), "red"]
        // ret: ["red", "red", "red", "red"]
        if (after) {
            // console.log([ret, ...args])
            // [Array(4), Array(4), "red"]
            // (ret, ...args) => $(args[0])
            ret = after.apply(this, [ret, ...args]);
            console.log(ret);
        }

        return ret;
    };
}
// fn: setColor
function cast(fn) {
    return wrap(multicast(fn), (...args) => {
        if (typeof args[0] === 'string') {
            args[0] = Array.from(document.querySelectorAll(args[0]));
        }

        return args;
    }, (ret, ...args) => $(args[0]));
}

function zip(props) {
    function Class(...args) {
        this.__args = args;
    }
    let keys = Object.keys(props);
    keys.forEach((key) => {
        Class.prototype[key] = function (...args) {
            let ok = props[key].apply(this, [...this.__args, ...args]);
            // console.log(ok)
            return ok;
        };
    });
    return (...args) => new Class(...args);
}
[setColor, setFontSize] = multicast(cast)([setColor, setFontSize]);

let $ = zip({setColor, setFontSize});

$('li:nth-child(2n+1)').setColor('red').setFontSize('32px');
