const palindromes = function (string) {
    const word = string.toLowerCase().replace(/[^a-z0-9]/g,'');
    return word == word.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
