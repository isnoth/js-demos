var log = console.log

function binarySearch(srcArray, des){
    var low = 0;
    var high = srcArray.length-1

    log(low, high)
    while (low <= high){
        var middle = Math.ceil((low + high)/2)
        log(low, high, middle)
        if(des == srcArray[middle]){
            return middle
        }else if( des < srcArray[middle]){
            high = middle -1
        }else{
            low = middle +1
        }
    }
    return -1

}

var ary = [1,2,3,4,6,8,9,11,34,56,77,78,79,81]
log(binarySearch(ary, 81))
