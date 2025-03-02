const text=document.querySelector("#text")
const number=document.querySelector("#number")

text.addEventListener("input",()=>{
    const remaining=50-text.value.length
    number.textContent=remaining
})