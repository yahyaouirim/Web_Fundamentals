console.log("hello world!!!");


function hide(ele){
    ele.remove();
}
function message(ele){
    alert("Ninja was liked !!!");
}

function login(element){
    if(element.inner-Text == "login"){
        element.innerText = "Logout";

    }
    else{
        element.innerText = "Login";

    }
}