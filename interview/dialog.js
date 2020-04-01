// 1.请设计一个 Dialog 类，Dialog可以创建如下布局（不用关心颜色）的对话框，
// 对话框支持可拖拽。
// <div class=”dialog”>
// <div class=”title”></div>
// <div class=””></div>
// </div>
const isMobile = /(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)
class Dialog {
    constructor() {
        this.build();
        this.bindEvent();
    }

    get element() {
        return document.getElementsByClassName('dialog')[0]
    }

    bindEvent = () =>{
        if ( isMobile){ //移动端
            this.element.addEventListener('touchstart', this.handleTouchStart)
            this.element.addEventListener('touchmove', this.handleTouchMove)
            this.element.addEventListener('touchend', this.handleTouchEnd)
       } else {
            this.element.addEventListener('mousedown', this.handleTouchStart)           
            this.element.addEventListener('mouseup', this.handleTouchEnd)
       }
        
    }

    unbindEvent = () => {
        if (isMobile) { //移动端
            this.element.removeEventListener('touchstart', this.handleTouchStart)
            this.element.removeEventListener('touchmove', this.handleTouchMove)
            this.element.removeEventListener('touchend', this.handleTouchEnd)
        }else {
            this.element.removeEventListener('mousedown', this.handleTouchStart)
            this.element.removeEventListener('mousemove', this.handleTouchMove)
            this.element.removeEventListener('mouseup', this.handleTouchEnd)
        }
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
        let pageX,pageY;
        if(isMobile) {
            pageX = e.touches[0].pageX;
            pageY = e.touches[0].pageY
        } else {
            pageX = e.clientX;
            pageY = e.clientY;
            this.element.addEventListener('mousemove', this.handleTouchMove)
        }

        this.startX = pageX - x;
        this.startY = pageY - y;
    }

    handleTouchMove = (e)=> {
        let pageX, pageY
        if(isMobile) {
            pageX = e.touches[0].pageX;
            pageY = e.touches[0].pageY
        } else {
            pageX = e.clientX;
            pageY = e.clientY;
        }
        this.endX = pageX;
        this.endY = pageY;
        let x = this.endX - this.startX;
        let y = this.endY - this.startY;
        this.element.style.transform = `translate3d(${x}px, ${y}px, 0)`
        this.element.style.translation = 'all 0ms ease-in'
    }

    handleTouchEnd = (e)=> {
        this.unbindEvent();
        setTimeout(()=> {
            this.bindEvent();
        })
        
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
