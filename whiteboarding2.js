//Given an unsorted array of positive and negative integers
//return the length of the longest sequence consecutive integers

// 4,0,1,5,2,1  => 0,1,1,2,4,5 maxLength 2
// -1,0,1,-3,17 => -3,-1,0,1,17 maxLength 3

// sort the array
// step through the array
// if the nextIdx is === the currIdx+1 => increment lengthCount, store the count as maxLength
// else lenghtCount = 0


function findLongestConsecutiveInts(arr) {
  const sortedArr = arr.sort();

  let count = 1;
  let maxLength = 1;

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sorted[i] === sorted[i + 1]) {
      continue;
    }
    if (sortedArr[i + 1] === sortedArr[i] + 1) {
      count++;
      if (count > maxLength) {
        maxLength = count;
      }
    }
    else {
      count = 1;
    }
  }

  return maxLength;
}






