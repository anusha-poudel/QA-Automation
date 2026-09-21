function makeCounter(){
    let count = 0;
    return function(){
        count++;
        console.log (count);
    }
}
const next = makeCounter();
next();
next();
next();
