const capitalizeSentences = function (str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      result = result + str[i].toUpperCase();  
  }
}  
return result 
}



function isValidPassword(str) {
  str = str + ' ' === ' ' || str <= 12; {
    return false;
  }
}


function makeHalfSquares(arr) {
  let result = arr
    for (let i = 0; i < arr.length; i++) {
      if (arr.length() % 2 === 0) {
        return result
          } else if  
            (str.length() / 2)
          return result;
        }
      }
     
  
const countAs = function (nums) {
  let result = nums;
  for (let i = 0; i < nums.length; i++) {
    if (nums > 90) {
      return result
    }
  }
}


function deleteMiddleLetters() {
  
}


if (typeof capitalizeSentences === 'undefined') {
  capitalizeSentences = undefined;
}

if (typeof isValidPassword === 'undefined') {
  isValidPassword = undefined;
}

if (typeof makeHalfSquares === 'undefined') {
  makeHalfSquares = undefined;
}

if (typeof countAs === 'undefined') {
  countAs = undefined;
}

if (typeof deleteMiddleLetters === 'undefined') {
  deleteMiddleLetters = undefined;
}

if (typeof lastIndexOfSpace === 'undefined') {
  lastIndexOfSpace = undefined;
}

if (typeof hyphenateName === 'undefined') {
  hyphenateName = undefined;
}


module.exports = {
  capitalizeSentences,
  isValidPassword,
  makeHalfSquares,
  countAs,
  deleteMiddleLetters,
  lastIndexOfSpace,
  hyphenateName,
}
