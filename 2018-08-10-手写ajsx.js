// 1、创建XMLHttpRequest对象
var xhr = new XMLHttpRequest();
// 2、设置open参数
// 第一个参数可取值get或post;
// 第二个参数为请求的路径；
// 第三个参数为是否采用异步，使用ajax绝对是true的啦。
xhr.open('GET', 'Ajax.ashx?id=' + id, true);

// PS:如果第2步的第一个参数为post的话，其后的路径就不带“？”的参数啦，在第二步之后加一句：
// 设置请求报文头
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

// 3、注册回调函数
xhr.onreadystatechange = function () {
    // 注意此处的readyState的大小写，写错了，就没效果了哦
    if (xhr.readyState == 4) {
        // 判断服务器返回的状态码是否为200，如果不是，则可能服务器出现了不测
        if (xhr.status == 200) {
            // 接收返回的效果
            var res = xhr.responseText;
            // 将返回的结果赋值
            // document.getElementById('showcontext').innerHTML = res;
        }
    }

};

// 4、发送
xhr.send(null);
// 如果post第4步改为 
// 参数名=参数值
xhr.send('txtName=ss&txtpwd=123');
