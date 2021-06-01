// Time complexity - O(n)
// Space complexity - O(n)

function countUniqVals(arr: number[]) {    
    // create initial indices of 0 for the left index
    if (arr.length < 1) { return 0 }
    let left = 0;
    for (let right = 1; right < arr.length; right++) {
        if (arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
        }
    }
    return left+1;
}

console.log(countUniqVals([1, 2, 5, 5, 4, 6, 7]));