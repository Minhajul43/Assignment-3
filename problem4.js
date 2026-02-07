/*function signature/sample */
function gonoVote(array) {
  //write your code here
  if (!Array.isArray(array)) {
    return 'Invalid';
  }
  else {
    let isHa = 0;
    let isNa = 0;
    for (let i = 0; i < array.length; i++){
      if (array[i] === 'ha') {
        isHa++;
      }

      else {
        isNa++;
      }
    }

    if (isHa > isNa) {
      return true;
    }
    else if (isHa < isNa) {
      return false;
    }
    else {
      return 'equal';
    }
  }
}


const arr = ['ha', 'na', 'na','ha','ha'];
const result = gonoVote(arr);
console.log(result);