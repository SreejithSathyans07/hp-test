function Calculate(){
    var a = 10;
    var b = 5;

    var sum = +a+b;
    console.log("sum = "+sum);

    difference(a,b);

    var product = a*b;
    console.log("Product = ",product);

    var division = a/b;
    console.log("Division = ",division);
}

<<<<<<< Updated upstream
=======
function sum(a, b){
    var sum = +a+b;
    console.log("sum = "+sum);
}

function difference(a, b){
    //This is added as part of devcon-1707
    var difference = +a-b;
    console.log("Differnce = "+difference);
}

>>>>>>> Stashed changes
Calculate();