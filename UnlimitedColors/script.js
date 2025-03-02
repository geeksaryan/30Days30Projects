
const randomColor=function(){
    const hex='0123456789ABCDEF'
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    } 
    return color;
}
// console.log(randomColor())

let flag;
const startChangingColor=function(){
    if(!flag){
        flag=setInterval(changebgColor,250)
    }

    function changebgColor(){
        document.body.style.backgroundColor=randomColor();
        console.log(randomColor())
    }
};
const stopChangingColor=function(){
    clearInterval(flag);
    flag=null
}

document.querySelector('#start').addEventListener
('click',startChangingColor);

document.querySelector('#stop').addEventListener
('click',stopChangingColor);