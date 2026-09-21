function countVowels(str){
    const lower = str.toLowerCase();
    let count = 0;
    for(const char of lower){
        if('aeiou'.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(`vowel count=`,countVowels('elephant'));