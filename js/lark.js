// let obj= {
//     name: 'chen',
//     skill:['react','vue','javascript'],
//     say: function () {
//         for(let i = 0, len = this.skill.length; i< len; i++){
//           setTimeout(function(){
//               console.log(this)
//             console.log('No.' + i + this.name);
//             console.log(this.skill[i]);
//             console.log('--------------------------');
//           }, 0);
//           console.log(i);
//         }
//     }
// }
// // obj.say()

// let oneStr = 'abc';
// let twoStr = '123456789';

// function pushArr(str) {
//     let arr = []
//     let len = str.length;
//     if (len === 0)return;
//     let times = Math.floor(len /8);
//     while (times-- > 0) {
//         arr.push(str.substring(0,8))
//         str = str.substring(8)
//     }
//     let data = fill(str);
//     return arr.concat(data)
// }
    
// function fill(str) {
//     let arr = []
//     if (str.length === 0)return
//     let times = 8 - str.length;
//     let resStr = str
//     while(times-- > 0) {
//         resStr = resStr + '0'
//     }
//     arr.push(resStr)
//     return arr
// }
// pushArr(oneStr);
// pushArr(twoStr);
// for(let i =0;i<arr.length;i++) {
//     console.log(arr[i])
// }

var arr = [['jfa','gajg7jfa558'] ]
let n = arr.length
while(n-- > 0){
    let strA = arr[n][0];
    let strB = arr[n][1];
    let result = 0;
    for (let i =0;i < strA.length;i++) {
        let char = strA.charAt(i);
        let indexArr = []
        for (let k=0;k<strB.length;k++) {
            if (strB.charAt(k) === char) {
                indexArr.push(k)
            }
        }
        
        if(indexArr.length === 0){
            continue
        } else {
            for(let z = 0; z<indexArr.length;z++){
                let index = indexArr[z]
                let max = 0
                console.log('index==',index)
                for(let j= index;j<strB.length;j++) {
                    if (i+j-index >strA.length)break;
                    if (strA.charAt(i+j-index) === strB.charAt(j)){
                        max++;
                    }else {
                        break;
                    }
                }
                if (max > result){
                    result = max
                }
            }
        }
        
    }
    console.log(result)
}