function reverseNumber(n){
    let reversed = 0;
    while(n>0){
        const lastNum= n%10;
        reversed = reversed*10 + lastNum;
        n = Math.floor(n/10);
    }
    return reversed;
}
console.log(`Reversed Number: `,reverseNumber(274));