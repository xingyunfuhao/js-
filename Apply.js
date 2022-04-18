Function.prototype._apply=function(ctx,array=[]){
    const o= ctx==undefined?window:Object(ctx);
    const key=Symbol();
    o[key]=this;
    const result=o[key](...array);
    delete o[key];
    return result;
}

var age = 10
var obj = {
  age: 20,
}
function foo(a, b) {
    console.log(this.age + a + b);
}
foo(3,4);
foo._apply(obj,[3,4]);


Function.prototype._call=function(ctx,...args){
    const o=ctx==undefined?window:Object(ctx)
    const key=Symbol();
    o[key]=this;
    const result=o[key](...args);
    delete o[key];
    return result;
}

Function.prototype._bind=function(ctx,...args){
    const _self=this;
    function newFun(...rest){
        return _self.call(ctx,...rest,...args)
    }
    if(_self.prototype){
        newFun.prototype=Object.create(_self.prototype)
    }
    return newFun;
}
