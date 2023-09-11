const lengthOfLastWord = function(s) {
    let wordsArray = s.split(' ');
    for (let i = wordsArray.length - 1; i >= 0; i--) {
        if (wordsArray[i] === '') {
            wordsArray.splice(i, 1);
        }
    }
    const lastWord = wordsArray[wordsArray.length - 1];
    const lastWordLength = lastWord.length;
    return lastWordLength;
};

// Test ----> Expected output = 3
console.log(lengthOfLastWord("luffy   is still having fun      "));