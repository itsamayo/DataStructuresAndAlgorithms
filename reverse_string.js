// Reverse string
// O(1) time complexity
// O(n) space complexity

function reverseString(str) {
    return str.split('').reverse().join('')
}

console.log(reverseString('crikey'))