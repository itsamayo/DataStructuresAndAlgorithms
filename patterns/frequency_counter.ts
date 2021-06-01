// Time complexity - O(n)
// Space complexity - O(n)

function validAnagram(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    let word1 = {};
    let word2 = {};
    for (let i in str1) {        
        word1[str1[i]] = word1[str1[i]] + 1 || 1; // 'car' = {c:1, a:1, r:1}        
    }
    console.log(word1)
    for (let j in str2) {
        word2[str2[j]] = word2[str2[j]] + 1 || 1; // 'rat' = {r:1, a:1, t:1}        
    }
    console.log(word2);
    for (let x in word1) {
      if (word1[x] != word2[x]) {
          return false; // r=1 r=null = false
      }
    }
    return true;
}

console.log(validAnagram('car', 'rac'));