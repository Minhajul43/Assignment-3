//Problem-01: New Price for Eid Sale
function newPrice(currentPrice , discount ) {
  // You have to write your code here
  if (typeof currentPrice !== "number"
      || typeof discount !== "number"
      ||currentPrice<=0
      || discount > 100
      || discount < 0) {
    return 'Invalid';
  }

  else {
    let discountPrice = currentPrice * (discount / 100);
    let newPrice = currentPrice - discountPrice;
    return newPrice.toFixed(3);
  }
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  // You have to write your code here
  if (typeof otp !== "string") {
    return 'Invalid';
  }

  else {
    if (otp.startsWith('ph-') && otp.length === 8) {
      let digit = otp.slice(3);
      if (!isNaN(digit)) {
        return true;
      }
    }
    else {
      return false;
    }
  }
}

//Problem-03: BCS Final Score Calculator
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

    else if (omr.right < 0 || omr.wrong < 0 || omr.skip < 0) {
      return 'Invalid';
    }
    else {
      let Score =omr.right - (omr.wrong / 2);
      let finalScore = Math.round(Score);
      return finalScore;
    }
  }
  
}

//Problem-04: Upcoming Gono Vote
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

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
  // You have to write your code here
  if (typeof str !== "string" || str==="") {
    return 'Invalid';
  }
  else {
    let number = str.split(" ").join("").length;

    let words = str.split(" ");
    let longword = "";
    for (let i = 0; i < words.length; i++){
    if (words[i].length > longword.length) {
      longword = words[i];
    }
   }

   return {
    longwords:longword,token:number
   }
  }
}

