const iterator=document.querySelector(".iterator");
const decrease_btn=document.querySelector(".decrease-btn")
const reset_btn=document.querySelector(".reset-btn")
const increase_btn=document.querySelector(".increase-btn")


increase_btn.addEventListener("click",()=>{
    iterator.innerHTML=parseInt(iterator.innerHTML)+1
})
decrease_btn.addEventListener("click",()=>{
    iterator.innerHTML=parseInt(iterator.innerHTML)-1
})
reset_btn.addEventListener("click",()=>{
    iterator.innerHTML=0
})