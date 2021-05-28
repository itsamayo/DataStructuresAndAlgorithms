// Time complexity - O(n^2)
// Space complexity - O(n)

// UNOPTIMIZED VERSION OF BUBBLE SORT
function bubbleSort(arr: number[]){
  for(var i = arr.length; i > 0; i--){
    for(var j = 0; j < i - 1; j++){
      console.log(arr, arr[j], arr[j+1]);
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;         
      }
    }
  }
  return arr;
}

bubbleSort([8,1,2,3,4,5,6,7]);

// ES2015 Version
function bubbleSortOp(arr: number[]) {
  const swap = (arr: number[], idx1: number, idx2: number) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

bubbleSortOp([8,1,2,3,4,5,6,7]);