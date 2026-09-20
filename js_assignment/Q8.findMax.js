function findMax(arr){
    let max = arr[0];
    for (const num of arr){
        if(num> max){
            max = num;
        }
    }
    return max;
}
console.log(`Maximum number in array is:`, findMax([2,17,5,9]));