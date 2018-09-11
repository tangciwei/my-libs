function extend(Sub, Sup) {
    var F = function () {};
    F.prototype = Sup.prototype;
    Sub.prototype = new F();
    Sub.prototype.constructor = Sub;
}
