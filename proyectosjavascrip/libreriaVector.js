
// crearVector
function crearVector (n, m) {
    return Math.floor(Math.random() * (n - m + 1) + m);
  }
  
  let vectorArray = [];
  
  
  for (let index = 0; index < 10; index++) {
    vectorArray.push(0);
  }
  
  
  for (let i = 0; i <= 100; i++) {
    
    let vectorIndex = crearVector(2, 9);
    
    vectorArray[vectorIndex]++;
  }
  
  console.log(vectorArray);


// sumaVector

function sumaVector( v1, v2 ) 
{
 
let resultadoSumaVector = []
for ( let i = 0 ; i < v1.length; i ++)
{
resultadoSumaVector[i]= v1[i] + v2[i];
}

 return resultadoSumaVector

}

let vector1 = [ 1,2,3,4]
let vector2 = [1,1,1,1]

console.log(sumaVector(vector1, vector2))


// productoNumeroVector

function productoNumeroVector(n, v)
{

let resultadoNumeroVector = []
for ( let i = 0 ; i < n.length; i ++)
{
  resultadoNumeroVector [i]= n[i]* v [i] ;
}
return resultadoNumeroVector 

}

let ArrayVector1= [ 2,3,4,5]
let ArrayVector2= [2,2,2,2]
 console.log (productoNumeroVector(ArrayVector1, ArrayVector2))


//resta vector 

function restaVector( v1, v2 ) 
{
 
let resultadoRestaVector = []
for ( let i = 0 ; i < v1.length; i ++)
{
resultadoRestaVector[i]= v1[i] - v2[i];
}

 return resultadoRestaVector

}

let RestaVector1 = [ 3,3,3,3]
let RestaVector2 = [1,1,1,1]

console.log(restaVector(RestaVector1, RestaVector2))



// productoVector

function productoVector( v1, v2 ) 
{
 
let resultadoProductoVector = []
for ( let i = 0 ; i < v1.length; i ++)
{
resultadoProductoVector[i]= v1[i] * v2[i];
}

 return resultadoProductoVector

}

let ProductoVector1 = [ 1,2,3,4]
let ProductoVector2 = [1,1,1,1]

console.log(productoVector(ProductoVector1, ProductoVector2))


module.exports = { crearVector,sumaVector,productoNumeroVector ,restaVector , productoVector } 