function fizz(){
   for(var x=1; x<101; x++){
    if(x%3==0 && x%5==0) { console.log("fizzbuzz");}
    else if(x % 5 == 0) {console.log("buzz");}

        else if(x % 3 == 0){ console.log("fizz"); }
                    else{console.log(x);}



   }
    

}
fizz();



