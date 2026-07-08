const botonNo = document.getElementById("no");
const botonSi = document.getElementById("si");
const musica = document.getElementById("musica");
const contenedorBotones = document.querySelector(".botones");

// Botón NO se mueve
function moverBoton(){

    const padding = 20;
    const anchoPadre = contenedorBotones.clientWidth;
    const altoPadre = contenedorBotones.clientHeight;
    const anchoBoton = botonNo.offsetWidth;
    const altoBoton = botonNo.offsetHeight;
    const rectSi = botonSi.getBoundingClientRect();
    const rectPadre = contenedorBotones.getBoundingClientRect();

    const maxX = Math.max(0, anchoPadre - anchoBoton - padding);
    const maxY = Math.max(0, altoPadre - altoBoton - padding);

    let x, y;
    let intento = 0;
    do {
        x = padding + Math.random() * maxX;
        y = padding + Math.random() * maxY;
        intento += 1;
    } while (seSuperponeConSi(x, y, anchoBoton, altoBoton, rectSi, rectPadre) && intento < 20);

    botonNo.style.position = "absolute";
    botonNo.style.left = x + "px";
    botonNo.style.top = y + "px";

}

function seSuperponeConSi(x, y, anchoNo, altoNo, rectSi, rectPadre) {
    const noLeft = rectPadre.left + x;
    const noTop = rectPadre.top + y;
    const noRight = noLeft + anchoNo;
    const noBottom = noTop + altoNo;

    const margen = 20;
    return !(noRight + margen < rectSi.left || noLeft - margen > rectSi.right || noBottom + margen < rectSi.top || noTop - margen > rectSi.bottom);
}

botonNo.addEventListener("mouseover",moverBoton);

botonNo.addEventListener("touchstart",moverBoton);

// Botón SI
botonSi.addEventListener("click",function(){

    musica.currentTime = 0;
    musica.play().catch(() => {
        console.log("No se pudo reproducir el audio automáticamente.");
    });

    setTimeout(() => {
        alert("🐽 Sabía que dirías que sí, yo jamas trataria de hacerte daño lo sabes, solo que aveces soy un idiota y tengo miedo. Ademas que linda fuiste diciendo eso por mesanje gracias lindura wonita puerquita🐽");
    }, 100);

});