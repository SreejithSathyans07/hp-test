function Calculate(){
    var a = 10;
    var b = 5;

    sum(a,b);

    difference(a,b);

    var product = a*b;
    console.log("Product = ",product);

    var division = a/b;
    console.log("Division = ",division);
}

function sum(a, b){
    var sum = +a+b;
    console.log("sum = "+sum);
}

function difference(a, b){
    //This is added as part of devcon-1707
    var difference = +a-b;
    console.log("Differnce = "+difference);
}
Calculate();