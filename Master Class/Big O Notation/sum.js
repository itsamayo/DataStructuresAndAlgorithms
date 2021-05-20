const {performance} = require('perf_hooks');

// Test vars
let arr = [1, 2, 3]
let tstart, tfin, ans

// Sum of all numbers in an array
// O(n) in time complexity
// O(1) in space complexity - because there is only the assignment of numbers which take up a constant space
function sum(arr) {
    let total = 0
    for (let i=0; i < arr.length; i++) {
        total += arr[i]
    }
    return total
}

// Test
tstart = performance.now()
ans = sum(arr)
console.log('sum', ans)
tfin = performance.now()
console.log('sum took', (tfin-tstart)/1000, 'seconds')