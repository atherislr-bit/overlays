
console.log("Overlay funcionando correctamente");

// Selecciona la cámara
const camera = document.getElementById("camera");

// Animación simple (pulso suave)
let scale = 1;

setInterval(() => {
    if (scale === 1) {
        scale = 1.03;
    } else {
        scale = 1;
    }

    camera.style.transform = `scale(${scale})`;

}, 1200);
