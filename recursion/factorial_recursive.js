// Time complexity - O(1)
// Space complexity - O(1)

function factorial(num){
    if(num === 1) return 1;
    return num * factorial(num-1);
}

console.log(factorial(5))