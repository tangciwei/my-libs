var theThing = null;
var replaceThing = function () {
    var originalThing = theThing;
    var unused = function () {
        if (originalThing) {
            console.log('hi');
        }

    };

    theThing = {
        longStr: new Array(1000000).join('*'),
        someMethod: function () {
            console.log('someMessage');
        }
    };
    // replaceThing = null;
};

setInterval(replaceThing, 1000);
