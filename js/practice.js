function shuffle(arr) {
    let i = arr.length;
    while (i) {
        let j = Math.floor(Math.random() * i--);
        [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
}
// console.log(shuffle([1,32,2,3,4]))
function getNextValue(arr, n) {
    let left = 0;
    let right = arr.length - 1;
    var middle = Math.floor((left+ right)/2);
    while (left < right) {
        if (arr[middle] > n) {           
            right = middle
            console.log('if==',middle,left,right, arr[middle])
        } else {          
            left = middle+1
            console.log('else==',middle,left,right)
        }
        middle = Math.floor((left+ right)/2)
    }
    if  (arr[middle] <= n) return -1;
    return arr[middle]
}

// let a = getNextValue([1,2,2,3,3,4,5,6,8,9,10],3)
// let b = getNextValue([1,2,2,3,3],3)
// let c= getNextValue([1],3)
// console.log(a)

Function.prototype.bind = function(context, ...rest){
    let that = this
    return function() {
        console.log('rest===',rest)
        that.apply(context,Array.prototype.concat.call(rest, arguments))
    }
}
function child(name) {
    this.name = name
    console.log('child==',this.name)
}


function test() {
    let func= child.bind(this, 'json', 'hahha')
    let  result = func();
}

// test()

function outer(b) {
    this.a = b;
    let that = this;
    function gettera() {
        return that.a;
    }
    let a = b
    function inner(num) {
        console.log('===',a.val)
        a.val = num
        console.log('修改后=',a.val)
    }
    return inner
}

let b = {val: 3}
let inner1 = outer(b)
// let inner2 = outer(b)

// console.log('gobal==')

// inner1(1)
// b.val = 5
// inner1(2)
// inner2(2)

function new1(func){
    let obj = Object.create(func.prototype);
    let k = func.call(obj);
    if (typeof k === 'object'){
        return k
    }else {
        return obj;
    }
}

function person(name, age) {
    this.name = name;
    this.age = age;
}

function teacher(name,age) {
    person.call(this, name, age);
}
// teacher.prototype = new person();
teacher.prototype = Object.create(person.prototype);//原型链的继承 person.prototype.__proto__
person.prototype.wakeup = function () {
    console.log('12点起床')
}
teacher.prototype.constructor = teacher;
let a = new teacher('chen', 28)

// console.log()
// console.log(a.name, a.age)
// a.wakeup()




class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

function flatten(arr) {
    while(arr.some((item)=> Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}

    console.log(flatten([1,[2,[3,4]]]))