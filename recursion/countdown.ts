// Time complexity - O(1)
// Space complexity - O(1)
let n: number = 5;

// Recursive Version
function countDownRec(num: number){
    if(num <= 0) {
        console.log("Recursive All done!");
        return;
    }
    console.log(num);
    num--;
    countDownRec(num);
}

countDownRec(n);

// Time complexity - O(n)
// Space complexity - O(1)

// Iterative Version
function countDownIt(num: number){
    for(var i = num; i > 0; i--){
        console.log(i);
    }
    console.log("Iterative All done!")
}

countDownIt(n);