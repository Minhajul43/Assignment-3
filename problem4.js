/*function signature */
function gonoVote(array) {
  //write your code here
  if (!Array.isArray(array) || array.length===0) {
    return 'Invalid';
  }
  else {
    let isHa = 0;
    let isNa = 0;
    for (let i = 0; i < array.length; i++){
      if (array[i] === 'ha') {
        isHa++;
      }

      else if(array[i]==='na'){
        isNa++;
      }
      else {
        return 'Invalid';
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


const arr = ['ha', 'na', 'na','na'];
const result = gonoVote(arr);
console.log(result);