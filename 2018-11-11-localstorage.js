// 计算最大容量
(function () {
    if (!window.localStorage) {
        console.log('当前浏览器不支持localStorage!');
    }

    var test = '0123456789';
    var add = function (num) {
        num += num;
        if (num.length == 10240) {
            test = num;
            return;
        }

        add(num);
    };
    add(test);
    var sum = test;

    var show = setInterval(function () {
        sum += test;
        try {
            window.localStorage.removeItem('test');
            window.localStorage.setItem('test', sum);
            console.log(sum.length / 1024 + 'KB');
        }
        catch (e) {
            console.log(sum.length / 1024 + 'KB超出最大限制');
            clearInterval(show);
        }
    }, 0.1);
})();
// 获取已知大小
(function () {
    if (!window.localStorage) {
        console.log('浏览器不支持localStorage');
    }

    var size = 0;
    for (item in window.localStorage) {
        if (window.localStorage.hasOwnProperty(item)) {
            size += window.localStorage.getItem(item).length;
        }

    }
    console.log('当前localStorage剩余容量为' + (size / 1024).toFixed(2) + 'KB');
})();
