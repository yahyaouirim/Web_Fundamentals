console.log("page loaded...");
function editProfile(){
    if(document.getElementById("jane").innerText=="Jane Doe"){
        document.getElementById("jane").innerText="Yahyaoui Rim";

    }
    else{
        document.getElementById("jane").innerText="Jane Doe";

    }

}
var z=document.querySelector("#rnum");

function removeUser(element,el1,el2){
    element.remove();
    el1.remove();
    el2.remove();
    z.innerText--;
    console.log(z);

}

var y=500;

function addConector()
{  
     console.log(y);
     y++;
     document.getElementById("five").innerText=y;
}