function add() {
    // ��һ��ִ��ʱ������һ������ר�������洢���еĲ���
    var _args = [].slice.call(arguments);

    // ���ڲ�����һ�����������ñհ������Ա���_args���ռ����еĲ���ֵ
    var adder = function () {
        var _adder = function() {
            [].push.apply(_args, [].slice.call(arguments));
            return _adder;
        };

        // ������ʽת�������ԣ������ִ��ʱ��ʽת�������������յ�ֵ����
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }

        return _adder;
    }
    return adder.apply(null, [].slice.call(arguments));
}

console.log(add(1, 2, 3, 4, 5));  // 15
console.log(add(1, 2, 3, 4)(5));  // 15
console.log(add(1)(2)(3)(4)(5));  // 15
