import { performance } from 'perf_hooks';

// Test vars
const n: number = 10;
let tstart: number, tfin: number;

// Print all pairs in n
// O(n^2) in time complexity
// O(1) in space complexity
function printAllPairs(n: number) {
    for (let i=0; i < n; i++) {
        for (let j=0; j < n; j++) {
            console.log(i, j);
        }
    }
}

// Test
tstart = performance.now();
printAllPairs(n);
tfin = performance.now();
console.log('printAllPairs took', (tfin-tstart)/1000, 'seconds');