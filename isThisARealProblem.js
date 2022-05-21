//hex: 0-9ABCDEF
//normal: 0-9

//function that takes a hex as str returns decimal equiv

// return value is a num

// hex: 20 => 32
// hex: 10 => 16
// hex: 7F => 127
// hex: 100 => 256

//a = 10
//b = 11
//c = 12
//d = 13
//e=14
//f=15


// psuedocode
// create a lookup table translate hex val to norm val
// count = 1
// iterate backwards over the string
// multiply count by current strVal
// count++
// add result to number
// return number

// hex: 20 => 32
// hex: 10 => 16
// hex: 7F => 127
// hex: 100 => 256

function hexToNorm(hex) {
  const look = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "a": 10,
    "b": 11,
    "c": 12,
    "d": 13,
    "e": 14,
    "f": 15
  }

  hexStr = hex.reverse();
  let mult = 16;
  let number = 0;
  let count = 1;

  for (let i = 0; i < hexStr.length; i++) {
    number += (mult * look[hexStr[i]]);
    mult = mult ** count;
  }

  return number;
}
