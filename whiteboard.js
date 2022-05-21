// takes arr of nums
// returns obj with 2 keys (one ints one non-ints)

// [], [1], [1.5] , [1,1.5]

// iterate over our array of nums
// if num mod num === 1 add to ints
// if num mod num !=== 1 add to non-ints
// return nums

function seperateInts(nums) {
  const keys = {};
  keys.ints = [];
  keys.nonInts = [];

  if (nums.length === 0) {
    return keys;
  }

  for (let num of nums) {
    if (num === Math.floor(num)) {
      keys.ints.push(num);
    }
    else {
      keys.nonInts.push(num);
    }
  }

  return keys;
}