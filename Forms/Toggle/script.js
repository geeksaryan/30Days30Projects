const button=document.querySelector(".button")
const text=document.querySelector(".text")

// let flag=1
button.addEventListener("click",function(){
    if(text.style.display==="none"){
        text.style.display="block"
        this.style.backgroundColor="red"
        // flag=0
    }
    else{
        text.style.display="none"
        // flag=1
    }

})
