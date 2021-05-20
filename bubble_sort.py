# Bubble sort algorithm
# This is technically inefficient as it has a time complexity of O(n^2)
# It does also have a not so great space complexity of O(n)
def bsort(arr):

    # Loop through each number in the array
    for i in range(len(arr)):

        # Through each loop the num at last i should be put in place
        for j in range(len(arr)-i-1):

            # Check if the current num at j is greater than 
            # the next num in the array
            if arr[j] > arr[j+1]:

                # Swap the numbers around if true
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

    # Log out sorted array
    print(arr)

arr = [2, 5, 22, 512, 23, 6]

bsort(arr)