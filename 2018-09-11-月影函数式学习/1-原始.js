function add(x, y) {
    return x + y;
}
function mul(x, y) {
    return x * y;
}
function concat(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(add(1, add(2, 3)), // 6
    mul(1, mul(2, mul(3, 4))), // 24
    concat([1, 2], concat([3, 4], [5, 6]))); // [1,2,3,4,5,6]
