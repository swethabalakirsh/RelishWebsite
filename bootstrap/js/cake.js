var part=document.getElementById("log-innpa")
console.log(part);

part.addEventListener("click",function(){
    var resu=document.getElementById("reesultpart")
    console.log(resu);
    resu.style.display="block";
})


var heart=document.getElementById("heart1")
console.log(heart);
 heart.addEventListener("click",function(){
    var incre =document.getElementById("heart")
    console.log(incre);
    incre=this.textContent="200 ♥";
     
 })
 var search =document.getElementById("search")
 console.log(search);
 search.addEventListener("click",function(){
    var  vis =document.getElementById("visiblepart")
    console.log(vis);
    vis.style.display="block";
 })


 var search =document.getElementById("search")
 console.log(search);
 search.addEventListener("click",function(){
    var  vis =document.getElementById("visiblepart1")
    console.log(vis);
    vis.style.display="block";
 })
