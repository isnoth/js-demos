var sum = (function() {
    var list = [];

    var add = function() {
        // 拼接数组
        var args = Array.prototype.slice.call(arguments);
        list = list.concat(args);
        return add;
    }
    // 覆盖 toString 方法
    add.toString = function() {
        // 计算总和
        var sum = list.reduce(function(pre, next) {
            return pre + next;
        });
        // 清除记录
        list.length = 0;
        return sum;
    }

    return add;
})();


sum(2,3).toString()
console.log(sum(2)(3))


var add = function add() {
    var cache;
    if (arguments.length === 1) {
        cache = arguments[0];
        return function ( number ) {return cache + number;};
    }
    else return arguments[0] + arguments[1];
};

console.log(add(2,3))
console.log(add(2)(3))

//https://w3ctrain.com/2017/02/17/sum-of-bitch/
