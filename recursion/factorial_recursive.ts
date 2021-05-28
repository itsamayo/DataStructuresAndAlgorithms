// Time complexity - O(1)
// Space complexity - O(1)

function factorial(num: number){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(5))