function ADD(){
    var x=Number(document.getElementById('num1').value)
    var y=Number(document.getElementById('num2').value)
    var z=x+y;
    console.log(z)
    z=z.toFixed(2)
    document.getElementById('result').innerHTML=
    `<h3>Result is`+z+`</h3>`
    
}
function SUB(){
    var x=Number(document.getElementById('num1').value)
    var y=Number(document.getElementById('num2').value)
    var z=x-y;
    console.log(z)
    z=z.toFixed(2)
    document.getElementById('result').innerHTML=
    `<h3>Result is`+z+`</h3>`
    
}
function MULT(){
    var x=Number(document.getElementById('num1').value)
    var y=Number(document.getElementById('num2').value)
    var z=x*y;
    console.log(z)
    z=z.toFixed(2)
    document.getElementById('result').innerHTML=
    `<h3>Result is`+z+`</h3>`
    
}
function DIV(){
    var x=Number(document.getElementById('num1').value)
    var y=Number(document.getElementById('num2').value)
    var z=x/y;
    console.log(z)
    z=z.toFixed(2)
    document.getElementById('result').innerHTML=
    `<h3>Result is`+z+`</h3>`
}