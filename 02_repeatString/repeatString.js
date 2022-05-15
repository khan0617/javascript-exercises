const repeatString = function(word, num) {
    let result = '';
    for(let i = 0; i < num; i ++){
        result = result.concat(word);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
