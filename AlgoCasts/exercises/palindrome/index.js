// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let i = 0
    let j = str.length - 1
    while (j > i) {
        if (str[i] === str[j]) {
            i++
            j--
        } else {
            return false
        }
    }
    return true
    // const rev = str.split('').reverse().join('')
    // return str === rev
}

module.exports = palindrome;
