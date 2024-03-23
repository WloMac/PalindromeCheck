let checkBtn = document.getElementById("check-btn")
let textInput = document.getElementById("text-input")
let result = document.getElementById("result")
let reversedInput
let cleanInput  

function isEmpty(){
  if (textInput.value === ""){
    alert("Please input a value")
  }
}

function cleanedInput(){
  let delSpecialChar = textInput.value.replace(/[^a-zA-Z0-9]/g,'');
  cleanInput = delSpecialChar.toLowerCase();
  return cleanInput
}

function reverseInput(){ 
  let toReverse = cleanInput.split("");  
  let splitAndReversed = toReverse.reverse();
  reversedInput = splitAndReversed.join("");
  return reversedInput;
}

function checkPalindorme(){
  if (cleanInput === reversedInput){
    result.innerHTML = ` ${textInput.value} is a palindrome`
  }else{
    result.innerHTML = `${textInput.value} is not a       palindrome`
  }
}

function checkBtnLogic(){
  isEmpty();
  cleanedInput();
  console.log(cleanInput)
  reverseInput();
  console.log(reversedInput)
  checkPalindorme();
  console.log(textInput.value)
  
}



checkBtn.addEventListener("click", checkBtnLogic)