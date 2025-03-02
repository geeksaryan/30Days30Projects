//both input and container creation done here
const tierInput=document.getElementById("tier")

const submitBtn=document.getElementById("submit");

const tierSection = document.querySelector("#tier-list-section");

const imageForm=document.getElementById("image-form")

imageForm.addEventListener("submit",(event)=>{ // imageItemInput  --->click
    event.preventDefault()
    const imageItemInput=document.getElementById("image-item")
    if(imageItemInput.value === ""){
        alert("Please Enter a Valid Image url")
        return;
    }
    const imageUrl=imageItemInput.value;
    createTierListItem(imageUrl)
    imageItemInput.value=""
})
function createTierListItem(imageUrl){
    const imageDiv=document.createElement("div");
    imageDiv.classList.add("item-container")
    imageDiv.setAttribute("draggable","true")

    setUpItemContainersForDrag(imageDiv)

    const img=document.createElement("img")
    img.src=imageUrl

    imageDiv.appendChild(img)

    const nonTierSection=document.getElementById("non-tier-section")
    nonTierSection.append(imageDiv)
    
}

submitBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    if(tierInput.value === ""){
        alert("Please Enter a Tier Name")
        return;
    }
    createElement(tierInput.value)
    tierInput.value=""
})

function createElement(inputValue){
    const newTierList=document.createElement("div")
    newTierList.classList.add("tier-list")

    const heading=document.createElement("div")
    heading.classList.add('heading')
    // heading.textContent=inputValue

    const textContainer = document.createElement("div");
    textContainer.textContent = inputValue;  // ✅ Use inputValue instead of tierlistName
    heading.appendChild(textContainer);

    

    const newTierListItem=document.createElement("div")
    newTierListItem.classList.add("tier-list-items")

    newTierList.appendChild(heading)
    newTierList.appendChild(newTierListItem)
    tierSection.appendChild(newTierList)

    setUpDropZoneInTierListItem(newTierListItem)
}

//Now we need to add dragable event listener to
//  imageDiv(class:item-container) -->newTierListItem(class:tier-list-item)

const itemContainers=document.getElementsByClassName("item-container");  

for(i of itemContainers){
    setUpItemContainersForDrag(i)
}

let currentDragedItem;

function setUpItemContainersForDrag(itemContainer){
    // console.log(itemContainer);
    itemContainer.addEventListener("dragstart",(event)=>{
        // console.log("started dragging")     // When u drag it will print
        // console.log(event.target.parentNode) //event.target points to img but we need div so we will access their parent
        currentDragedItem=event.target.parentNode; //We are putting the dragged to the variable now
    })

    itemContainer.addEventListener("dblclick",(event)=>{ //If dbclick then get back the image to their position
        const parentNode=event.target.parentNode;
        const nonTierSection=document.getElementById("non-tier-section")
        nonTierSection.appendChild(parentNode)
    })
}

//Now drag is done now we need to drop it class tier-list


function setUpDropZoneInTierListItem(newTierListItem){  //we will drop this in newTierList
    // console.log(newTierList)  //when we will make new newTierList it will always print

    //now we will take the currentDragedItem and put it here
    newTierListItem.addEventListener("drop",(event)=>{  //Browser does not allow directly to drop...
        event.preventDefault();//stops the default behaviour of the event which is to not allow drop
        // console.log("Dropped")
    }) 
    newTierListItem.addEventListener("dragover",function(event){ //this--->newTierListItem
        console.log("Drag over drop zone")
        // console.log(event.target)

        // event.target.appendChild(currentDragedItem) 
        if(this !== currentDragedItem.parentNode) {
            this.appendChild(currentDragedItem)
        }
    })

}


function getRandomColor() {
    const colors = ["#ff4e50", "#fc913a", "#f9d423", "#e94e77", "#6a0572", "#8a2be2", "#009688"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function createElement(inputValue) {
    const newTierList = document.createElement("div");
    newTierList.classList.add("tier-list");

    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.style.backgroundColor = getRandomColor(); // Set random color

    const textContainer = document.createElement("div");
    textContainer.textContent = inputValue;
    heading.appendChild(textContainer);

    const newTierListItem = document.createElement("div");
    newTierListItem.classList.add("tier-list-items");

    newTierList.appendChild(heading);
    newTierList.appendChild(newTierListItem);
    tierSection.appendChild(newTierList);

    setUpDropZoneInTierListItem(newTierListItem);
}
