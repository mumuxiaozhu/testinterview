/**
 *
 * @param fn {Function}   实际要执行的函数
 * @param delay {Number}  执行间隔，单位是毫秒（ms）
 *
 * @return {Function}     返回一个“节流”函数
 */

function throttle(fn, threshhold) {

    // 记录上次执行的时间
    var last

    // 定时器
    var timer

    // 默认间隔为 250ms
    threshhold || (threshhold = 250)

    // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
    return function () {

        // 保存函数调用时的上下文和参数，传递给 fn
        var context = this
        var args = arguments

        var now = +new Date()

        // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃
        // 执行 fn，并重新计时
        if (last && now < last + threshhold) {
            clearTimeout(timer)

            // 保证在当前时间区间结束后，再执行一次 fn
            timer = setTimeout(function () {
                last = now
                fn.apply(context, args)
            }, threshhold)

            // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
        } else {
            console.log("的家电家具")
            last = now
            fn.apply(context, args)
        }
    }
}
function fn(){
    console.log(new Date().getTime(),arguments)
}
var c = throttle(fn, 3000)
c(3);
c(4);
c(5);
setTimeout(function(){
    c(6);
},3000)
c(7);