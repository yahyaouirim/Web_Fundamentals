
var count=[9, 12 ,9];
var array=[document.querySelector("#counting1"),
document.querySelector("#counting2"), 
document.querySelector("#counting3")];

console.log(array);

function countLike(id){
    count[id]++;
    array[id].innerText= count[id] + " "+"like(s)";
}