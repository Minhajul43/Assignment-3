/*function signature/sample */
function finalScore (omr) {
  //write your code here
  if (typeof omr !== "object"
    && typeof omr.right !== "number"
    && typeof omr.wrong !== "number"
    && typeof omr.skip !== "number"
   ) {
    return 'Invalid';
  }

  else {
    if (omr.right + omr.wrong + omr.skip !== 100) {
      return 'Invalid';
    }
    else {
      let Score =omr.right - (omr.wrong / 2);
      let finalScore = Math.round(Score);
      return finalScore;
    }
  }
  
}

const omr = {
  right: 54, wrong:20, skip: 23
}

const result = finalScore(omr);
console.log(result);
