//line=readline()
//print(line)
// 1.不是， Array.prototype.slice.call(arguments)

// 2. script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// 3.
function repeat(func, times, wait){
    for (var i=0; i< times;i++){
        let args = Array.prototype.slice.call(arguments)
        let _this = args[0]
        
        let timer = setTimeout(function(){
            func.call(_this,args.slice(1).concat(Array.prototype.slice.call(arguments)))
        },wait)
        
    }
}
4.
say: function () {
    for(let i = 0, len = this.skill.length; i< len; i++){
      setTimeout(function(){
        console.log('No.' + i + this.name);
        console.log(this.skill[i]);
        console.log('--------------------------');
      }, 0);
      console.log(i);
    }
  }
5.
function Child() {
    this.name = 'child';
    Parent.call(this);
}
function Parent() {
    this.name = 'parent';
    
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

6.
function get() {
  // 请补全函数参数和实现逻辑
    let args = Array.prototype.slice.call(arguments)
    let obj = args[0];
    let resultArr = []
    for (let i =1; i< args.length; i++){
        let propertyArr = args.split('.');
        let resultEle = obj
        for(let j= 0; j<property.length; j++) {
            resultEle = resultEle[propertyArr[j]]
        }
        resultArr.push(resultEle)
    }
    return resultArr;
    
}
const obj = { 
    selector: { to: { toutiao: 'FE coder' } }, 
    target: [1, 2, { name: 'byted' }] };// 运行代码
get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name')