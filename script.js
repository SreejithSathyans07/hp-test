function Calculate(){
    var a = 10;
    var b = 5;

    sum(a,b);

    difference(a,b);

    prodcut(a, b);

    division(a,b);
	
	
}

function sum(a, b){
	console.log("Splunk method name sum");
    //This is added as part of devcon-1664
    var sum = +a+b;
    console.log("sum = "+sum);
}

function difference(a, b){
	console.log("Splunk method name differece");
    //This is added as part of devcon-1707
    var difference = +a-b;
    console.log("Differnce = "+difference);
}

function product(a, b){
	console.log("Splunk method name product");
    //This is added as part of devcon-1855
    var product = a*b;
    console.log("Product = ",product);
}

function division(a,b){
	console.log("Splunk method name division");
    //This is added as part of devcon-1885
    var division = a/b;
    console.log("Division = ",division);
}
Calculate();