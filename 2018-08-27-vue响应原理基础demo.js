// const ins = new Vue({
//   data: {
//     a: 1
//   }
// })

// ins.$watch('a', () => {
//   console.log('修改了 a')
// })

// ----------

// dep 数组就是我们所谓的“筐”
const data = {
    a: 1,
    b: {
        c: 2
    },
    name: 'tcw'
};

function walk(data) {
    for (const key in data) {
        const dep = [];
        let val = data[key];
        if (Object.prototype.toString.call(val) === '[object Object]') {
            walk(val);
        }

        Object.defineProperty(data, key, {
            set(newVal) {
                if (val === newVal) {
                    return;
                }

                val = newVal;
                dep.forEach(fn => fn());
            },
            get() {

                dep.push(Target);
                return val;
            }
        });
    }
}

walk(data);

// Target 是全局变量
let Target = null;
function $watch(exp, fn) {
    // 将 Target 的值设置为 fn
    Target = fn;
    let pathArr;
    let obj = data;
    if (typeof exp === 'function') {
        exp();
        return;
    }

    // 读取字段值，触发 get 函数
    // 检查 exp 中是否包含 .
    if (/\./.test(exp)) {
        // 将字符串转为数组，例：'a.b' => ['a', 'b']
        pathArr = exp.split('.');
        // 使用循环读取到 data.a.b
        pathArr.forEach(p => {
            obj = obj[p];
        });
        return;
    }

    data[exp];
}
function render() {
    return console.log(`姓名：${data.name}; 年龄：${data.age}`);
}
// 冗余依赖处理
$watch(render, render);
data.name = '1';
data.name = '2';

// $watch('b.c', () => {
//     console.log('b.c');
// });
// $watch('b', () => {
//     console.log('b');
// });
// $watch('a', () => {
//     console.log('a');
// });
// data.b.c=5;
// console.log(data.a);
