//if (!('bind' in Function.prototype)){
//    Function.prototype.bind = function(){
//        var fn = this;
//        var context = arguments[0];
//        var args = Array.from(arguments).slice(1);
//        return function(){
//            return fn.apply(context, args)
//        }
//    }
//}

Function.prototype.yourBind = function(){
    return ()=>{
    }
}

function add(x, y){
    return x+y
}

var addBound = add.yourBind({}, 3)
console.log(addBound(2))


