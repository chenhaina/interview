function debounce(func, wait) {
    let time = Number(wait) || 0;
    let timeId, context, args

    function clearTime() {
        if (timeId) {
            clearTimeout(timeId);
            timeId = null
        }
    }

    function invokeFunc() {
        clearTime();
        func.apply(context, args)
    }

    return function () {
        context = this;
        args = Array.prototype.slice(arguments, 0)
        clearTime();
        timeId = setTimeout(invokeFunc, time)
    }

}

// function unique(array) {
//    let arr  = array.filter(function(item, index, array){
//        return array.indexOf(item) === index;
//    })
//    return arr
// }

function unique(array) {
    let set = new Set(array);
    // return Array.from(set)
    return [...set]
}

let arr = unique([1,2,3,2,1,2,3,4,5,3,2,3,4,7,8,9]);
// console.log(arr);

var array = [{value: 1}, {value: 1}, {value: 2}];

function unique1(array) {
    var obj = {};
    return array.filter(function(item, index, array){
        // console.log(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
        // let  isBool = (typeof item + JSON.stringify(item))? false : (obj[typeof item + JSON.stringify(item)] = true
        return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true);
    })
}

console.log(unique1(array)); // [{value: 1}, {value: 2}]