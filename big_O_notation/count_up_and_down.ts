import { performance } from 'perf_hooks';

// Test vars
const n: number = 10
let tstart, tfin, ans

// Count up to n
// O(n) in time complexity
// O(1) in space complexity
function countUpAndDown(n: number) {
    console.log('going up')
    for (let i=0; i < n; i++) {
        console.log(i)
    }
    console.log('at the top')
    for (let j=n-1; j >= 0; j--) {
        console.log(j)
    }
    console.log('back down')
}

// Test
tstart = performance.now()
ans = countUpAndDown(n)
tfin = performance.now()
console.log('countUpAndDown took', (tfin-tstart)/1000, 'seconds')