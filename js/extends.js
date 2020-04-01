function Parent4(){
    this.name="parent4";
    this.play=[1,2,3]
}
Parent4.prototype.say=function(){
    console.log('say4')
}
function Child4(){ 
    Parent4.call(this);
    this.type="child4"
}
Child4.prototype=Parent4.prototype;
Child4.prototype.goodbye = function(){
    console.log('child4 goodbye')
}
function Child2(){
    Parent4.call(this);
    this.type = "child2";
}
Child2.prototype=Parent4.prototype;
Child2.prototype.goodbye = function(){
    console.log('child2 goodbye')
}
var s3=new Child4()
var s4=new Child4()
s3.play.push(4);
s4.goodbye();
// console.log(s3.play,s4.play)//1，2，3，4
// console.log(s3.constructor)//Parent4

// Function.prototype.bind = function (context, ...rest) {
//     let thatFun = this;
//     return function () {
//         thatFun.apply(context, Array.prototype.concat(rest,arguments))
//     }
// }

Function.prototype.bind = function (oThis) {
    if (typeof this !== 'function') {
        throw new TypeError('绑定的不是function')
    }
        
    let args = Array.prototype.slice(arguments, 1);
    let  thatFun =  this;
    function fBound() {
        return thatFun.apply(this instanceof fBound? this: oThis, args.concat(Array.prototype.slice(arguments)))
    }
    fBound.prototype = Object.create(this.prototype);
    return fBound;   
}


function aa() {
    console.log('111',this=== global)
}
console.log(this,'===')
let aabind = aa.bind(this)

aabind();