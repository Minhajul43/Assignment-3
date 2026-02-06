/*function signature/sample */
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


const sentence = analyzeText("Keep coding keep shining");
console.log(sentence);

