function throttle(func, wait) {
    let prev = new Date().now();
    return function () {
        let context = this;
        let args = Array.prototype.slice(arguments,0)
        let now = new Date().now();
        let remainTime = wait - (now - prev)
        if (remainTime <= 0) {
            func.apply(context, args)
            prev = now
        } else {
            let timeId = setTimeout(function () {
                timeId = null;
                func.apply(context, args)
            }, remainTime)
        }

    }
}