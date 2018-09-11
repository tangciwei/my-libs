// <ul>
//   <li>1</li>
//   <li>2</li>
//   <li>3</li>
//   <li>4</li>
//   <li>5</li>
//   <li>6</li>
//   <li>7</li>
// </ul>

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

function setColor(el, color) {
    return el.style.color = color;
}

setColor = multicast(setColor);

var list = document.querySelectorAll('li:nth-child(2n+1)');
setColor(Array.from(list), 'red');
