// Time complexity - O(1)
// Space complexity - O(n)

function collectOddValues(arr: number[]){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1,2,3,4,5]);
                                        
                                                                
                                                                             
                            
            