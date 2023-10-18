function odds(){
    console.log("ODDS NUMBER");

    for(var i=1; i<=20; i++){
        if(i%2 !=0){
            console.log(i);
            i++;
        }
        else {i++;}

    }
}

odds();

    function decreasing3(){
        console.log("decreasing multiple of 3");

    for(var i=100; i>=0; i--){
    if(i %3 == 0){ console.log(i); i--;}
        else{ i--;}

    }

                        }
    decreasing3();

    function printSeq(){
        console.log("Print the values in this sequence 4, 2.5, 1, -0.5, -2, -3.5.");
        var i=4;
        while(i >= -3.5){
            console.log(i);
            i-=1.5;
        }

    }
    printSeq();

    function sigma(){
        console.log(" sum all of the value from 1 to 100")
        var sum = 0;
        for(var i=1; i<101; i++) {
            sum += i;
        }
        console.log(sum);        
        }

sigma();
        function factoriel(){
            console.log(" multiply all of the values from 1-12");
            var prod=1;
            for(var i=1; i<13; i++) {
                prod *= i;
            }
            console.log(prod);  

        }
factoriel();