let cantidadPersonas = parseInt (prompt("indica la cantidad de personas que registras"));

let premiosPorPersona ; //registro premios

let sumadorPremios = 0 ; //acumulador de premios

let n ; //ciclo

for(n=1 ;n <= cantidadPersonas;n++){
    
    premiosPorPersona = parseInt(prompt("ingresa la cantidad de premios por persona " + n ))
sumadorPremios = sumadorPremios + premiosPorPersona;

}
let promedio = premiosPorPersona/cantidadPersonas

alert ("el promedio de los premios entregados es"+ " " + promedio )