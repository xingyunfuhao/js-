//时间戳版
function throttle(func,delay){
    let last=0;
    return function(){
        let now=Date.now();
        if(now>=delay+last){
            func.apply(this,arguments);
            last=now;
        }
        else{
            console.log("距离上次调用的时间差不满足要求哦")
        }

    }
}

//定时器版
function throttle(func,delay){
    let timer=null;
    return function(){
        if(!timer){
            func.apply(this,arguments);
            timer=setTimeout(()=>{
                timer=null
            },delay)
        }
        else{
            console.log('上一个定时器尚未完成')
        }
    }
}