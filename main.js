const capitalizeSentences = function (str) {
   let result = '';
   for (let i = 0; i < str.length; i++) {
     if (str[i - 2] === '.' || i === 0) {
       result = result + str[i].toUpperCase();  
      }  else result = result + str[i].toLowerCase();
    }
    return result;
  }
  

  function isValidPassword(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
      } if (str.length < 12) {
        return false;
        return false;
    }
    return true;
  }
  }

  function makeHalfSquares(arr) {
    let result = arr
    for (let i = 0; i < arr.length; i++) {
      if (arr.length() % 2 === 0) {
        return result
      } 
    }
  }
  
  
  
  const countAs = function(nums) {
    let result = nums;
    for (let i = 0; i < nums.length; i++) {
      if (nums > 90) {
        return result
      }
    }
  }
  
  
  const deleteMiddleLetters = function(str) {
      let result = '';
      const middle = Math.floor(str.length / 2);
  for (let i = 0; i < str.length; i++) {
    if (str.length % 2 === 1) {
      if(i !== middle) {
        result = result + str[i];
      }
    } else if (i !== middle && i !== middle - 1) {
        result = result + str[i];
    }
  }
  return result;
}

const lastIndexOfSpace = function(str) {
    return str.lastIndexOf(' ');
  }
  
  
const hyphenateName = function(name) {
  let result = '';
  for(let i = 0; i < name.length; i++) {
    if (i === name.lastIndexOf(' ')) {
      result = result + '-';
    } else {
      result = result + name[i];
    }
  }
  return result;
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
