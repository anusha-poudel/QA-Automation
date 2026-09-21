function wordCount(sentence){
    const obj ={};
    const words = sentence.split(' ');
    for(word of words){
        obj[word] = (obj[word] || 0) + 1;
    }
    console.log(obj);
}
wordCount('a b d a s k s');
