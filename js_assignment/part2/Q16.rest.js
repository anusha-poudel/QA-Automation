function sumAll(...nums) {
  return nums.reduce((total, n) => total + n, 0);
}

console.log(sumAll(1,2,3,));
console.log(sumAll());