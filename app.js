
let numeroSecreto = 0;
let numeroMax = 10;
let intentos = 1;
let listNumSorteados = [];

condicionesIniciales();

function asignarTexto( etiqueta, texto){

let etiquetaHTML = document.querySelector(etiqueta);

etiquetaHTML.innerHTML = texto;
return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        asignarTexto('p', `!Has Acertado el número en ${intentos} ${(intentos == 1 ? 'intento':'intentos')}¡`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        // El usuario no acerto
        if(numeroDeUsuario > numeroSecreto){
          asignarTexto('p', 'El número secreto es menor');
        }else {
            asignarTexto('p', 'El número secreto es mayor');
        }
        limpiarCaja();
        intentos++;
    }

    return;
}


function limpiarCaja(){
    return document.querySelector('#valorUsuario').value = '';
}

function generarNumero() {
    let numGenerado = Math.floor( Math.random() * numeroMax) + 1;

    console.log(numGenerado);
    console.log(listNumSorteados);

    //SI ya sorteamos todos los numeros hacer:

    if (listNumSorteados.length == numeroMax) {
        asignarTexto('p', 'Se agotaron los números posibles :(');

    } else {

    //Verificar si el número esta en la lista
        if(listNumSorteados.includes(numGenerado)){
         return generarNumero();
        } else{
        listNumSorteados.push(numGenerado);
        return numGenerado;
        }
    }
}

function condicionesIniciales(){

    asignarTexto('h1', 'Juego del Número Secreto');
    asignarTexto('p', `Ingresar un número del 1 al ${numeroMax} :`);
    intentos = 1;
    numeroSecreto = generarNumero();

}

function reiniciar(){

    //Limpiar Caja
    limpiarCaja();

    // Reiniciar
    condicionesIniciales();
    //Deshabilitar boton
    document.getElementById('reiniciar').setAttribute('disabled', true);
}