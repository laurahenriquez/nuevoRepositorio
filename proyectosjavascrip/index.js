function suma ( x, y =0)
{
    let resultadoSuma = x + y ;
    console.log(resultadoSuma)
}

function resta ( x, y = 0)
{

let resultadoResta = x - y ;
console.log(resultadoResta)

}

function multiplicacion ( x, y = 0 ) 
{
    let resultadoMultiplicacion = x * y ;
    console.log(resultadoMultiplicacion)

}


function division ( x, y=0)
{
    let resultadoDivision = x/y ;
    console.log(resultadoDivision)

}

function cuadrado (x) 

{
    let cuadradoNumero = Math.pow (x,2);
    console.log(cuadradoNumero)

}





module.exports = { suma, resta, multiplicacion, division , cuadrado }