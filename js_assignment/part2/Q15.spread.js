function merge(obj1, obj2){
    return {...obj1, ...obj2};
}

const ob1 = {a:2, b:3, c:4};
const ob2 = {c:5, d:6, e:7};

console.log(merge(ob1, ob2));