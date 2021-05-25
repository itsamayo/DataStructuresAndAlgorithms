const {performance} = require('perf_hooks');

// Sum of n + 1 - n times

// Test vars
const n = 10000000
let tstart, tfin, ans

// Loop example
// O(n) in time complexity
// O(1) in space complexity
function loopAdd(n){
    let total = 0
    for (let i=1; i <= n; i++) {
        total += i
    }
    return total
}

// Test loop method
tstart = performance.now()
ans = loopAdd(n)
tfin = performance.now()
console.log('loop answer', ans)
console.log('loop took', (tfin-tstart)/1000, 'seconds')

// Math example
// O(1) in time complexity
// O(1) in space complexity
function mathAdd(n) {
    return n * (n + 1) / 2;
}

// Test math example
tstart = performance.now()
ans = mathAdd(n)
tfin = performance.now()
console.log('math answer', ans)
console.log('math took', (tfin-tstart)/1000, 'seconds')