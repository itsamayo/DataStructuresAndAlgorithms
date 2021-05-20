// Bubble sort algorithm
// O(n^2) time complexity
// O(n) space complexity
function bsort(arr){
  
    // Loop through each number in the array
    for (let i=0; i < arr.length; i++) {
      
      // Through each loop the num at last i should be put in place
      for (let j=0; j < (arr.length-i-1); j++) {
        
        // Check if the current num at j is greater than 
        // the next num in the array
        if (arr[j] > arr[j+1]) {
                  
          // Swap the numbers around if true
          let temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp        
        }
      }
    }
    
    // Log out sorted array
    console.log(arr)  
  }
  
  // Example
  const arr = [234, 43, 55, 63,  5, 6, 235, 547]
  
  // Test
  bsort(arr)