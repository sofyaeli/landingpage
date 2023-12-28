let Nombre= prompt("Ingrese Nombre");
let Materia= prompt("Ingrese Materia");

let nota1= parseFloat(prompt("Ingresar nota 1 (del 0 al 10)"));
let nota2= parseFloat(prompt("Ingresar nota 2 (del 0 al 10)"));
let nota3= parseFloat(prompt("Ingresar nota 3 (del 0 al 10)"));

if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 10 || nota2 < 0 ||nota2 > 10 ||nota3 < 0 || nota3 > 10 ){
    console.log ("Por favor, ingrese una nota valida entre el 0 al 10")
    console.log("Nota1..." + nota1)
    console.log("Nota2..." + nota2)
    console.log("Nota3..." + nota3)
} else {
    console.log("Nota1..." + nota1)
    console.log("Nota2..." + nota2)
    console.log("Nota3..." + nota3)
    let promedio= (nota1 + nota2 + nota3) /3
    console.log ("Su promedio..." + promedio)


    if (promedio>= 7){
    console.log(`${Nombre} !Felicidades¡ has aprobado ${Materia} con un promedio de: ${promedio}`)
} 
    else {
    console.log(`${Nombre}, gracias por tu esfuerzo. Nos vemos pronto en clase. El promedio en ${Materia}, obtenido es: ${promedio}`)
 }
}
