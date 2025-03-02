const inputBox=document.getElementById("inputBox")
const addBtn=document.getElementById("addBtn")
const todoList=document.getElementById("todoList")
 
let editedItem=null;

//Function to add todo 
addBtn.addEventListener("click",()=>{
    const inputText=inputBox.value.trim()
    if(inputText.length <= 0){
        alert("You must write something in your todo")
        return false;
    }
    // function to edit
    if(addBtn.value === "Edit"){
        //Now editedItem have updated li so we need to
        //access the p from li and update everything
        const p=editedItem.querySelector("p")
        let oldText = p.innerText;
        p.innerText = inputText;//inputText value come to p
        editLocalTodos(oldText)
        addBtn.value="Add"
        inputBox.value=" ";
        editedItem=null
        return;
    }
    else {
        const li=document.createElement("li")
        const p=document.createElement("p")
        p.innerHTML=inputText
        li.appendChild(p)

        const editBtn=document.createElement("button")
        editBtn.innerText="Edit"
        editBtn.classList.add("btn","editBtn")
        li.appendChild(editBtn)

        const deleteBtn=document.createElement("button")
        deleteBtn.innerText="Remove"
        deleteBtn.classList.add("btn","deleteBtn")
        li.appendChild(deleteBtn)

        const CompleteBtn=document.createElement("button")
        CompleteBtn.innerText="Completed"
        CompleteBtn.classList.add("btn","CompleteBtn")
        li.appendChild(CompleteBtn)


        todoList.appendChild(li)
        inputBox.value=" "

        saveLocalTodos(inputText)
    }
})

//function to remove and edit todo
todoList.addEventListener("click",(e)=>{
    // console.log(e.target.parentElement )
    // if (e.target.classList.contains("deleteBtn")) {
    //     e.target.parentElement.remove()
    // }
    if(e.target.innerHTML === "Remove"){
        e.target.parentElement.remove()
        removeLocalTodos(e.target.parentElement);
    }
    if(e.target.innerHTML === "Edit"){
        // console.log(e.target.parentElement)
        //access p and store it into inputBox
        const li=e.target.parentElement  
        const p=li.querySelector("p")   
        const pText=p.innerText   
        inputBox.value=pText
        inputBox.focus();
        // Store the li in editedItem
        editedItem=li;
        addBtn.value="Edit"
    }
    

})

//Function to save to local storage
const saveLocalTodos=(todo)=>{  //todo=Buy Milk
    let todos=[]
    if(localStorage.getItem("todos") === null){  //return null
        todos=[]                                //so we get todos=[] 
    }  
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
        //by adding second item it will run else ["Buy Milk"]
    } 
    todos.push(todo) // todos.push("Buy Milk");// ["Buy Milk"]
    localStorage.setItem("todos",JSON.stringify(todos))//(string to array) //JSON.stringify("["Buy Milk"]""); // Returns: ["Buy Milk"] 
}

//Function to get from local storage
const getLocalTodos=()=>{
    let todos=[]
    if(localStorage.getItem("todos") === null){  //return null
        todos=[]                                //so we get todos=[] 
    } 
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
        todos.forEach((element)=>{
            const li=document.createElement("li")
            const p=document.createElement("p")
            p.innerHTML=element
            li.appendChild(p)

            const editBtn=document.createElement("button")
            editBtn.innerText="Edit"
            editBtn.classList.add("btn","editBtn")
            li.appendChild(editBtn)
 
            const deleteBtn=document.createElement("button")
            deleteBtn.innerText="Remove"
            deleteBtn.classList.add("btn","deleteBtn")
            li.appendChild(deleteBtn)

            const CompleteBtn=document.createElement("button")
            CompleteBtn.innerText="Completed"
            CompleteBtn.classList.add("btn","CompleteBtn")
            li.appendChild(CompleteBtn)

            todoList.appendChild(li)
            inputBox.value=" "
        })
    }
}
//Function to delete(li) from local storage
const removeLocalTodos=(li)=>{
    let todos=[]
    if(localStorage.getItem("todos") === null){  //return null
        todos=[]                                //so we get todos=[] 
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
    let todoText=li.firstElementChild.innerHTML //get the access of li first child p and remove from local storage 
    // Now we got p innerHtml and will search in local and delete it
    let todoIndex=todos.indexOf(todoText)
    todos.splice(todoIndex, 1)
    localStorage.setItem("todos",JSON.stringify(todos))
}
// Function to set edited todos to local Storage
const editLocalTodos = (oldText) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.indexOf(oldText);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}
document.addEventListener("DOMContentLoaded",getLocalTodos)