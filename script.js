function Calculate(){
    var a = 10;
    var b = 5;

    sum(a,b);

    difference(a,b);

    prodcut(a, b);

    var division = a/b;
    console.log("Division = ",division);
}

function sum(a, b){
    //This is added as part of devcon-1664
    var sum = +a+b;
    console.log("sum = "+sum);
}

function difference(a, b){
    //This is added as part of devcon-1707
    var difference = +a-b;
    console.log("Differnce = "+difference);
}

function product(a, b){
    //This is added as part of devcon-1855
    var product = a*b;
    console.log("Product = ",product);
}
Calculate();