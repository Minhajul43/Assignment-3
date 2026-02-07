/*function signature/sample */
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

const OTP = validOtp('ph-34343');
console.log(OTP);

