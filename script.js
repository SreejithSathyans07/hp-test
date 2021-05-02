function Calculate(){
    var a = 10;
    var b = 5;

    sum(a,b);

    var difference = +a-b;
    console.log("Differnce = "+difference);

    var product = a*b;
    console.log("Product = ",product);

    var division = a/b;
    console.log("Division = ",division);
}

function sum(a, b){
    var sum = +a+b;
    console.log("sum = "+sum);
}

Calculate();