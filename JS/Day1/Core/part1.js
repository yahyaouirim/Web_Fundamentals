var h3=document.querySelector("h3");
console.log(h3);
var count=3;
function countLike(){
    count++;
    h3.innerText= count+ " " +"like(s)";
}