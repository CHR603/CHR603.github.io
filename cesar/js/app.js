//variables
const rangeInput = document.getElementById('number');
const rangeValue = document.getElementById('number-value');
const solucion = document.getElementById('solucion');
const run = document.getElementById('run');
const frase = document.getElementById('frase');
const alfabeto="abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789áéíóúÁÉÍÓÚ@#$%^&*()_+|~`-={}[]:;'<>?,./"

//eventos
rangeInput.addEventListener('input', () => {
    rangeValue.textContent = rangeInput.value;
});


/*
    cifra una cadena usando una cadena de entrada un paso 
*/
function cifrar(cadena,paso){
    let resultado=""
    for (let i = 0; i < cadena.length; i++) {
        let letra = cadena[i]
        let pos = alfabeto.indexOf(letra)

        if (pos === -1) {
            
            resultado += letra
        } else {
            // nueva posición
            let nuevaPos = pos + paso

            // volvemos al principio
            while (nuevaPos >= alfabeto.length) {
                nuevaPos = nuevaPos - alfabeto.length
            }

            // letra cifrada
            resultado += alfabeto[nuevaPos]
        }
    }
    return resultado;
}

run.addEventListener("click", () => {
    let texto = frase.value
    let paso = parseInt(rangeInput.value)

    let cifrado = cifrar(texto, paso)

    solucion.innerHTML = cifrado
})
