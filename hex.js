const arr=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn =document.getElementById("btn");
const colorname=document.querySelector("#colorname");


btn.addEventListener("click",function(){
    let hexcolor="#";
    for(var i=0;i<6;i++){
        var randomno=Math.floor(Math.random()*arr.length);
        hexcolor+=arr[randomno];
    }
    document.body.style.backgroundColor=hexcolor;
    colorname.textContent=hexcolor;
})