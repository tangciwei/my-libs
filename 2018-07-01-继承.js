function extend(Sub, Sup) {
    var F = function() {};
    F.prototype = Sup.prototype;
    Sub.prototype = new F();
    Sub.prototype.constructor = Sub;
}


function extend2(Sub, Sup) {
    Sub.prototype = Object.create(Sup.prototype);
    Sub.prototype.constructor = Sub;
}