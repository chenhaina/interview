// 1.请设计一个 Dialog 类，Dialog可以创建如下布局（不用关心颜色）的对话框，
// 对话框支持可拖拽。
// <div class=”dialog”>
// <div class=”title”></div>
// <div class=””></div>
// </div>
class Dialog {
    constructor() {
        this.build();
        this.bindEvent();
    }

    get element() {
        return document.getElementsByClassName('dialog')[0]
    }

    bindEvent = () =>{
        this.element.addEventListener('touchstart', this.handleTouchStart)
        this.element.addEventListener('touchmove', this.handleTouchMove)
        this.element.addEventListener('touchend', this.handleTouchEnd)
    }

    unbindEvent = () => {
        this.element.removeEventListener('touchstart', this.handleTouchStart)
        this.element.removeEventListener('touchmove', this.handleTouchMove)
        this.element.removeEventListener('touchend', this.handleTouchEnd)
    }

    getTranslateXyz = (sty)=> {
        if (this.element.style.transform === '') return 0
        let translates = this.element.style && this.element.style.transform
        let result = translates.match(/\(([^)]*)\)/);// 正则()内容
        let matrix=result?result[1].split(','):translates.split(',');
        if(sty=="x" || sty==undefined){
            return parseFloat(matrix[0])
        }else if(sty=="y"){
            return parseFloat(matrix[1])
        }else if(sty=="z"){
            return parseFloat(matrix[2])
        }
    }

    handleTouchStart = (e)=> {
        let x = this.getTranslateXyz('x');
        let y = this.getTranslateXyz('y');
        this.startX = e.touches[0].pageX - x;
        this.startY = e.touches[0].pageY - y;
    }

    handleTouchMove = (e)=> {
        this.endX = e.touches[0].pageX;
        this.endY = e.touches[0].pageY;
        let x = this.endX - this.startX;
        let y = this.endY - this.startY;
        this.element.style.transform = `translate3d(${x}px, ${y}px, 0)`
        this.element.style.translation = 'all 0ms ease-in'
    }

    handleTouchEnd = (e)=> {
        this.unbindEvent();
        this.bindEvent();
    }
    
    build = ()=> {
        let container = document.createElement('div');
        container.setAttribute('class', 'dialog');
        let title = document.createElement('div');
        let titleContent = document.createTextNode('dialog-title')
        title.appendChild(titleContent);
        title.setAttribute('class', 'title');
        let content = document.createElement('div');
        content.setAttribute('class', '')
        container.appendChild(title);
        container.appendChild(content);
        document.body.appendChild(container);
        // 加上大小样式
    }
}
window.onload= function() {
    let dialog = new Dialog();
}
