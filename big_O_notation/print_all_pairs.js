const {performance} = require('perf_hooks');

// Test vars
const n = 10
let tstart, tfin, ans

// Print all pairs in n
// O(n^2) in time complexity
// O(1) in space complexity
function printAllPairs(n) {
    for (let i=0; i < n; i++) {
        for (let j=0; j < n; j++) {
            console.log(i, j)
        }
    }
}

// Test
tstart = performance.now()
printAllPairs(n)
tfin = performance.now()
console.log('printAllPairs took', (tfin-tstart)/1000, 'seconds')