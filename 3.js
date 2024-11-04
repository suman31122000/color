const colors=["green","red","yellow","gray"];
const btn=document.getElementById("btn");
const colorname=document.getElementById("colorname");

btn.addEventListener("click",function(){
    var random=Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[random];
    colorname.textContent=colors[random];
})