import { performance } from 'perf_hooks';

// Test vars
let arr: number[] = [1, 2, 3, 4, 5];
let tstart: number, tfin: number, ans: number[];

// Double each number in the array
// O(n) in time complexity
// O(n) in space complexity
// n = arr.length
function double(arr: number[]) {
    let newArr = [];
    for (let i=0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}

// Test
tstart = performance.now();
ans = double(arr);
console.log('double', ans);
tfin = performance.now();
console.log('double took', (tfin-tstart)/1000, 'seconds');