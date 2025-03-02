const value=document.querySelector("#value")
const fromUnit=document.querySelector("#from-unit")
const toUnit=document.querySelector("#to-unit")

const convert_btn=document.querySelector(".convert-btn")
const result=document.querySelector("#result")

convert_btn.addEventListener("click", () => {
    if (value.value === "") {
        result.innerHTML=`Please enter a value`
        result.style.color = "red";
        return;
    }
    else if (isNaN(Number(value.value))) { // Now inputValue is correctly defined
        result.innerHTML=`Invalid input! Please enter a number.`
        result.style.color = "red";
        return;
    }
    else {
        conversion();
    }
});
function conversion(){
    if(fromUnit.value==="kilometers" && toUnit.value==="meters"){
        let ans=Number(value.value)*1000
        result.innerHTML=`Results:- ${ans} meters`;
    }
    else if(fromUnit.value==="meters" && toUnit.value==="kilometers"){
        let ans = Number(value.value) * 0.001;
        result.innerHTML=`Results:- ${ans} kilometers`;
    }
    else if(fromUnit.value==="centimeters" && toUnit.value==="meters"){
        let ans = Number(value.value) * 0.01;
        result.innerHTML=`Results:- ${ans} meters`;
    }
    else if(fromUnit.value==="meters" && toUnit.value==="centimeters"){
        let ans = Number(value.value) * 100;
        result.innerHTML=`Results:- ${ans} centimeters`;
    }
    else if(fromUnit.value==="millimeters" && toUnit.value==="meters"){
        let ans = Number(value.value) * 0.001;
        result.innerHTML=`Results:- ${ans} meters`;
    }
    else if(fromUnit.value==="meters" && toUnit.value==="millimeters"){
        let ans = Number(value.value) * 1000;
        result.innerHTML=`Results:- ${ans} millimeters`;
    }
    else if(fromUnit.value==="miles" && toUnit.value==="kilometers"){
        let ans = Number(value.value) * 1.60934;
        result.innerHTML=`Results:- ${ans} kilometers`;
    }
    else if(fromUnit.value==="kilometers" && toUnit.value==="miles"){
        let ans = Number(value.value) * 0.621371;
        result.innerHTML=`Results:- ${ans} kilometers`;
    }
    else if(fromUnit.value==="inches" && toUnit.value==="centimeters"){
        let ans = Number(value.value) * 2.54;
        result.innerHTML=`Results:- ${ans} centimeters`;
    }
    else if(fromUnit.value==="centimeters" && toUnit.value==="inches"){
        let ans = Number(value.value) * 0.393701;
        result.innerHTML=`Results:- ${ans} inches`;
    }
    else if(fromUnit.value==="yards" && toUnit.value==="meters"){
        let ans = Number(value.value) * 0.9144;
        result.innerHTML=`Results:- ${ans} meters`;
    }
    else if(fromUnit.value==="meters" && toUnit.value==="yards"){
        let ans = Number(value.value) * 1.09361;
        result.innerHTML=`Results:- ${ans} yards`;
    }
    else if(fromUnit.value==="Square-Kilometers" && toUnit.value==="Square-Meters"){
        let ans = Number(value.value) * 1000000;
        result.innerHTML=`Results:- ${ans.toFixed(3)} Square-Meters`;
    }
    else if(fromUnit.value==="Square-Meters" && toUnit.value==="Square-Kilometers"){
        let ans = Number(value.value) * 0.000001;
        result.innerHTML=`Results:- ${ans.toFixed(3)} Square-Kilometers`;
    }
    else{
        result.innerHTML=`Results:- Same unit selected, no conversion needed.`;
    }
}










// convert_btn.addEventListener("click",()=>{
//     console.log("Value Entered:", value.value);
//     console.log("From Unit:", fromUnit.value);
//     console.log("To Unit:", toUnit.value);
// })
