let sum = 0;

function sumEven(n){
    for(i=1; i<=n; i++){
        if(i%2===0){
            sum= sum+ i;
        }
    }
    return sum;
}

console.log(`Sum of first 10 even number is`, sumEven(10));