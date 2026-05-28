let botones = document.querySelectorAll('.p2')
let reiniciar = document.querySelector('#reiniciar')
let intentos = document.querySelector('#intentos')
let resultado = Math.floor(Math.random() * botones.length);
let contador = 0;
let indices = [];
let verificarFin = false;

reiniciar.addEventListener('click', (event) => {
    botones[resultado].textContent = ''
    contador = 0;
    botones.forEach(btn => btn.className = 'btn btn-dark p2')
    intentos.textContent = 'Intentos: '
    resultado = Math.floor(Math.random() * botones.length);
    indices = [];
    verificarFin = false;
})

console.log(resultado)
botones.forEach((btn, indice) => {
    btn.addEventListener('click', (event) => {

        if (indice == resultado) {
            event.target.textContent = "Me encontraste"
            alert('Felicidades!!')
            intentos.textContent = 'Intentos: ' + contador
            verificarFin = true;
        } else {
            if (!verificarFin) {
                if (!indices.includes(indice)) {
                    indices.push(indice)
                    contador++
                }
                event.target.className = 'btn btn-warning p2'
                intentos.textContent = 'Intentos: ' + contador
            }
        }
        
    })
})



