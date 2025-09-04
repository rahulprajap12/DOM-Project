var h1=document.querySelector("h1");
var btn=document.querySelector("button");
var color_box=document.getElementById("color_box");
btn.addEventListener("click",function(){
    var rad=Math.floor(Math.random()*256);
    var rad1=Math.floor(Math.random()*256);
    var rad2=Math.floor(Math.random()*256);
    var rgb=`rgb(${rad},${rad1},${rad2})`;
    color_box.style.backgroundColor=rgb;
    h1.innerText=rgb;
})