const {performance} = require('perf_hooks');

// Test vars
const n = 10
let tstart, tfin, ans

// Print out to at least 5 otherwise n
// O(n) in time complexity - because the count will grow exponentially with n
// O(1) in space complexity
function logAtLeast(n) {
    for (let i=0; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

// Test logAtLeast method
tstart = performance.now()
logAtLeast(n)
tfin = performance.now()
console.log('logAtLeast took', (tfin-tstart)/1000, 'seconds')

// Print out to at least 5 otherwise n
// O(1) in time complexity - because the count will never be more than 5 so it is technically constant
// O(1) in space complexity
function logAtMost(n) {
    for (let j=0; j <= Math.min(5, n); j++) {
        console.log(j);
    }
}

// Test logAtLeast method
tstart = performance.now()
logAtMost(n)
tfin = performance.now()
console.log('logAtMost took', (tfin-tstart)/1000, 'seconds')