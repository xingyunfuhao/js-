//函数防抖
// 在事件被触发N秒后再执行回调，如果在这N秒内又被触发，则重新计时
//函数在一段时间内的多次调用，仅使得最后一次调用有效
function ajax(content){
    console.log('ajax')
}

function debounce(func,delay){
    let timeout;
    return function(){
        clearTimeout(timeout);
        timeout=setTimeout(()=>{
            func.apply(this,arguments);
        },delay)
    }
}

debounce(ajax,100)