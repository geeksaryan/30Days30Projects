const input=document.getElementById("input_box")
const button=document.getElementById("button")

button.addEventListener("click",()=>{
    input.select();
    // input.setSelectedRange(0,99999);
    try{
        navigator.clipboard.writeText(input.value)
        if(snippet){
            alert("Code copied to clipBoard")
        }
        else{
            alert("Code copied to clipBoard")
        }
    }catch(err){
        alert("Failed")
    }
})