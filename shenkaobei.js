//深拷贝
function deepClone(obj,hash=new WeakMap()){
    if(obj===null) return obj;
    if(obj instanceof Date) return new Date(obj);
    if(obj instanceof RegExp) return new RegExp(obj);
    if(typeof obj!=="object") return obj;
    if(hash.get(obj)) return hash.get(obj);
    let cloneObj =new obj.constructor();
    hash.set(obj,cloneObj);
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            //实现一个递归
            cloneObj[key]=deepClone(obj[key],hash);
        }
    }
    return cloneObj;
}

function clone(target,map=new Map()){
    if(typeof target === 'object'){
        const isArray= Array.isArray(target);
        let cloneTarget=isArray?[]:{};
        if(map.get(target)){
            return map.get(target)
        }
        map.set(target,cloneTarget)
        for(const key in target){
            cloneTarget[key]=clone(target[key],map)
        }
        return cloneTarget
    }else{
        return target
    }
}

let obj = { name: 1, address: { x: 100 } };
obj.o = obj; // 对象存在循环引用的情况
let d = deepClone(obj);
obj.address.x = 200;
console.log(d);
console.log(obj.o);
