const sumSqOfEven = (nums) => nums.filter((n)=>n%2===0).
map((n)=>n*n).
reduce((sum,n)=> sum+n , 0);

console.log(sumSqOfEven([1, 2, 3, 4, 6, 7, 8])); 
console.log(sumSqOfEven([1, 13, 5]));