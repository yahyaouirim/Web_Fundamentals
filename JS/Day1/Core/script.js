console.log("hello world!!!");


function hide(elem){
    elem.remove();
}
function message(ele){
    alert("Ninja was liked !!!");
}

function log(element){
    // alert("please log out!!!!!!!!!!!!!!")
    if(element.innerText == "Login"){element.innerText = "Logout"; }
    else{ element.innerText = "Login"; }
}