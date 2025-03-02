const form=document.querySelector("#submit");
form.addEventListener("click",(event)=>{
    event.preventDefault();
    const username=document.querySelector("#username").value;
    const password=document.querySelector("#password").value;

    if(username && password){
        alert("Login Successful")
    }
    else{
        alert("Plzz Fill the input Fields")
    }
})