// Time complexity - O(n)
// Space complexity - O(n)

function linearSearch(arr: number[], val: number){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100);