var arr=[
    {
        dp:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1599142296733-1c1f2073e6de?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxVY015bW4wTTdYa3x8ZW58MHx8fHx8"
    },
    {
        dp:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWx8ZW58MHx8MHx8fDA%3D",
        story:"https://images.unsplash.com/photo-1599142296733-1c1f2073e6de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxVY015bW4wTTdYa3x8ZW58MHx8fHx8"
    },
    {
        dp:"https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww",
        story:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8fDB8fHww"
    },
    {
        dp:"https://images.unsplash.com/photo-1658827977333-594d8c5b3803?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MzZ8VWNNeW1uME03WGt8fGVufDB8fHx8fA%3D%3D",
        story:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG1vZGVsfGVufDB8fDB8fHww"
    }
]

var storiyan=document.querySelector("#storiyan")
var clutter=""
arr.forEach(function(elem,idx){
    clutter+=`<div class="story">
                <img id="${idx}" src="${elem.dp} " alt="">
            </div>`
});
storiyan.innerHTML=clutter

storiyan.addEventListener("click",function(dets){
    // console.log(dets.target) //You click on element you will get img with index
    // var value=(arr[dets.target.id].story)
    document.querySelector(".full-screen").style.
    display="block"
    document.querySelector(".full-screen").style.
    backgroundImage=`url(${arr[dets.target.id].story})`

    setTimeout(function(){
        document.querySelector(".full-screen").style.display="none"
        var con=document.querySelector(".container").style.display="flex";

    },3000)
    var con=document.querySelector(".container").style.display="none";

});

var con=document.querySelector(".container");
var love=document.querySelector("i");

con.addEventListener("dblclick",function(){
    love.style.transform="translate(-70%,-70%) scale(1)"
    love.style.opacity="0.8"

    setTimeout(() => {
        love.style.opacity="0"
    }, 1000);
  
    setTimeout(() => {
        love.style.transform="translate(-50%,-50%) scale(0)"
    }, 2000);
})