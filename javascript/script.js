/* Javascript */

function encriptador(){

    let dato = document.getElementsByClassName("seccion_entrada_de_texto")[0];
    let datos = dato.value;
    
    let textoEncriptado = "";

    for(let letra of datos){
        if(letra == "a"){
            textoEncriptado += "ai";
        } else if (letra == "e"){
            textoEncriptado += "enter";
        } else if (letra == "i"){
            textoEncriptado += "imes";
        } else if (letra == "o"){
            textoEncriptado += "ober";
        } else if (letra == "u"){
            textoEncriptado += "ufat";
        } else {
            textoEncriptado += letra;
        }
    }
    console.log(textoEncriptado);

    /* Terminal */
    let salida = document.getElementsByClassName("texto_aviso3")[0];
    
    if (salida) {
        salida.innerHTML = textoEncriptado;
    } else {
        console.error("El elemento con la clase 'texto_aviso3' no se encontró.");
    }

    /* Terminal */
};

function desencriptador(){

    let dato = document.getElementsByClassName("seccion_entrada_de_texto")[0];
    let datos = dato.value;

    let textoDesencriptado = datos.replace(/ai/g, "a").replace(/enter/g, "e").replace(/imes/g, "i").replace(/ober/g, "o").replace(/ufat/g, "u");

    console.log(textoDesencriptado);

    /* Terminal */
    let salida = document.getElementsByClassName("texto_aviso3")[0];
    
    if (salida) {
        salida.innerHTML = textoDesencriptado;
    } else {
        console.error("El elemento con la clase 'texto_aviso3' no se encontró.");
    }

    /* Terminal */
};



/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */


/* Función copiar */

function copiar(){
    let contenido_a_copiar = document.getElementsByClassName("texto_aviso3")[0].innerHTML;
    let boton_para_copiar = document.getElementById("boton_copiar");

    navigator.clipboard.writeText(contenido_a_copiar);
    boton_para_copiar.innerHTML = "Copiado";
};