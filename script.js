//display number on the text field
function displayNum(num){
    result.value+=num //+= is used for to enter same number  in multiple times(eg:777,5455)
}

//clear the text field
function clearText(){
    result.value =" "
}

//evaluate the expression

function evaluateNumber(){
    result.value =eval(result.value)
}
//Remove the last character from the text field
function removeLastCharacter(){
    result.value = result.value.slice(0,-1)
}