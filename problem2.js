/*function signature/sample */
function validOtp(otp) {
  // You have to write your code here
  if (typeof otp !== "string") {
    return 'Invalid';
  }

  else {
    if (otp.startsWith('ph-') && otp.length === 8) {
      return true;
    }
    else {
      return false;
    }
  }
}

const OTP = validOtp(342342);
console.log(OTP);

