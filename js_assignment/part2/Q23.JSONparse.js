function safeParse(str){
    try{
        return JSON.parse(str);
    } catch(err){
        return null;
    }
    finally{
        console.log('done');
    }
}

console.log(safeParse('{"name": "Anusha"}'));
console.log(safeParse("Anusha"));