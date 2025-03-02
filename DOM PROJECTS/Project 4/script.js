var elem=document.querySelectorAll(".elem")

elem.forEach(function(val){

    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1
    })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[3].style.left=dets.x+"px";
        val.childNodes[3].style.top=dets.y+"px"
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0
    })
})













// var elem1=document.querySelector("#elem1")
// var elemimage=document.querySelector("#elem1 img")

// elem1.addEventListener("mouseenter",function(dets){
//     elemimage.style.opacity=1
// })
// elem1.addEventListener("mousemove",function(dets){
//     elemimage.style.left=dets.x+"px"
//     elemimage.style.top=dets.y+"px"
// })
// elem1.addEventListener("mouseleave",function(){
//     elemimage.style.opacity=0
// })