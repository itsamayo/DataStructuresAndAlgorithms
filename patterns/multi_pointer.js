function countUniqVals(arr) {    
    // create initial indices of 0 for the left index
    if (arr.length < 1) { return 0 }
    let left = 0
    for (let right = 1; right < arr.length; right++) {
        if (arr[left] !== arr[right]) {
            left++
            arr[left] = arr[right]
        }
    }
    return left+1
}

console.log(countUniqVals([]))

// [1,1,1,2] l = 0, r = 1, arr.l = 4
// 1 1 = r +1 = 2 = arr[r] = 1
// 1 1 = r +1 = 3 = arr[r] = 2
// 1 2 = uniq = arr splice at l+1 = r