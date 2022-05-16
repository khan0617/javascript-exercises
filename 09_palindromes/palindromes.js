const palindromes = function (string) {
    processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    let reversedString = processedString.split("");
    reversedString = reversedString.reverse();
    reversedString = reversedString.join("");
    return processedString == reversedString;
};

// Do not edit below this line
module.exports = palindromes;
