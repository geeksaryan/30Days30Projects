const clearBtn=document.querySelector("#clear-button")
const deleteBtn=document.querySelector("#delete-button")
const divideBtn=document.querySelector("#divide-button")
const multipltBtn=document.querySelector("#multiply-button")
const sutractBtn=document.querySelector("#sutract-button")
const addBtn=document.querySelector("#add-button")
const decimalBtn=document.querySelector("#decimal-button")
const equalBtn=document.querySelector("#equal-button")

const numberBtn=document.querySelectorAll(".number")
const resultElement=document.getElementById("result")

// Example 24+5
// result = 24
// operation= +
// previousOperand=24 ,result =5 
// previousOperand + result =29
// result = 29

//Initialize the variables
let result=""
let operation=""
let previousOperand=0

//function to append number
const appendNumber=(number)=>{
    if(number === "." && result.includes(".")){
        return;
    }
    result+=number;
    updateDisplay()
}
//function to update display
const updateDisplay=function(){
    if(operation){ //to show operator on result board
        resultElement.innerText=`${previousOperand} ${operation} ${result}`;
    }
    else if (previousOperand !== "" && result === "") {
        resultElement.innerText = previousOperand;
    }
    else{
        resultElement.innerText=result || "0";
    }
}
//function to select operator
const selectOperator=(operatorValue)=>{
    if(result === "") return; //means if there will be no value nserted in the result at prev  so why to use operator
    if(operation !== "" && previousOperand !==""){
        calculateResult()
    }
    operation=operatorValue;
    previousOperand=result;
    result="";
    updateDisplay()
}
//function to calculateResult
const calculateResult = () => {
    let evaluateResult;
    const prev = parseFloat(previousOperand);
    const current = parseFloat(result);
    if (isNaN(prev) || isNaN(current)) return;
    if (operation === '+') {
        evaluateResult = prev + current;
    } else if (operation === '-') {
        evaluateResult = prev - current;
    } else if (operation === '*') {
        evaluateResult = prev * current;
    } else if (operation === '/') {
        evaluateResult = prev / current;
    } else {
        return;
    }
    result=evaluateResult.toString();
    operation=""
    previousOperand=""
};

//Add event listener to number button
numberBtn.forEach(button=>{
    button.addEventListener("click",(e)=>{
        appendNumber(button.innerText)
    })
})
//function to clear display
const clearDisplay=()=>{
    result="";
    previousOperand="";
    operation="";
    updateDisplay();
    resultElement.innerText = "0";
}
//function to delete last character
// const deleteLastDisgit=()=>{
//     if(result ==="") return;
//     else{
//         result=result.slice(0,-1)
//         updateDisplay()
//     }
// }
const deleteLastDisgit = () => {
    if (result !== "") {
        // If there's a result, delete the last digit
        result = result.slice(0, -1);
    } 
    else if (operation !== "") {
        // If result is empty, delete the operator
        operation = "";
    } 
    else if (previousOperand !== "") {
        // If everything is empty, delete from previousOperand
        previousOperand = previousOperand.slice(0, -1);
    }

    updateDisplay(); // Always update the screen after deletion
};


decimalBtn.addEventListener("click",function(){
    appendNumber(".")
})
addBtn.addEventListener("click",function(){
    selectOperator("+");
})
sutractBtn.addEventListener("click",function(){
    selectOperator("-");
})
multipltBtn.addEventListener("click",function(){
    selectOperator("*");
})
divideBtn.addEventListener("click",function(){
    selectOperator("/");
})
equalBtn.addEventListener("click",function(){
    if(result =="") return
    calculateResult();
    updateDisplay()
})
clearBtn.addEventListener("click",function(){
    clearDisplay();
})
deleteBtn.addEventListener("click",function(){
    deleteLastDisgit();
})