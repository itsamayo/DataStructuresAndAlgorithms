// Time complexity - O(n^2)
// Space complexity - O(1)

function sumRange(num: number){
   if(num === 1) return 1; 
   return num + sumRange(num-1);
}

console.log(sumRange(4));

                  
                                   
                                