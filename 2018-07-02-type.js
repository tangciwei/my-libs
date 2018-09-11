function type(obj) {
    let str = Object.prototype.toString.call(obj);
    return str.split('object')[1].split(']')[0].trim().toLowerCase();
}
