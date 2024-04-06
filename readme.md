# Oscilador
## ¡Bienvenido a Oscilador!

Oscilador es una aplicación web simple que te permite experimentar con tonos y frecuencias utilizando un oscilador de audio integrado en tu navegador. Con Oscilador, puedes ajustar la frecuencia del tono utilizando un control deslizante, un campo de entrada de texto o botones de aumento y disminución de frecuencia. Además, puedes reproducir el tono generado y experimentar con diferentes sonidos.

Características principales:
Ajuste de la frecuencia del tono utilizando un control deslizante (rango), un campo de entrada de texto o botones de aumento y disminución.
Reproducción del tono generado con el oscilador de audio integrado.
Interfaz de usuario intuitiva y fácil de usar.
¡Empieza a explorar y descubre las posibilidades sonoras con Oscilador!

## Explicación del Código

1. **window.onload**: Esta es una función que se ejecuta cuando se carga completamente el documento HTML en el navegador. Dentro de esta función, se colocará todo el código que queremos que se ejecute una vez que la página esté lista.

2. **window.AudioContext = window.AudioContext || window.webkitAudioContext**: Esta línea se asegura de que estamos utilizando el contexto de audio adecuado en todos los navegadores. En algunos navegadores, el objeto se llama `AudioContext`, mientras que en otros se llama `webkitAudioContext`. Esta línea garantiza que tengamos acceso al objeto de contexto de audio independientemente del navegador que estemos utilizando.

3. **Inicialización de variables globales**:
   - **contextoDeAudio**: Esta variable almacena una instancia del objeto de contexto de audio. Esencialmente, es el punto de partida para trabajar con audio en el navegador.
   - **estaReproduciendo**: Esta variable se utiliza para rastrear si el oscilador está reproduciendo o no. Inicialmente se establece en `false`.
   - **nodoFuente**: Esta variable representa el nodo de fuente del oscilador. Será un objeto que genera una forma de onda de audio, que luego se puede conectar a otros nodos de audio para procesamiento o reproducción.

4. **alternarOscilador()**: Esta es una función que se encarga de alternar la reproducción del oscilador. Si el oscilador ya está reproduciendo, lo detiene; de lo contrario, lo inicia.
   - **Detener la reproducción**: Si `estaReproduciendo` es `true`, se detiene el nodo de fuente (`nodoFuente`) utilizando el método `stop()`. Luego, se reinician las variables relacionadas con la reproducción.
   - **Iniciar la reproducción**: Si `estaReproduciendo` es `false`, se crea un nuevo nodo de fuente utilizando el método `createOscillator()` del contexto de audio. Se establece la frecuencia del oscilador en 440 Hz y se conecta a `contextoDeAudio.destination`, que es el nodo de destino predeterminado para la reproducción de audio en el contexto de audio. Luego se inicia el oscilador con `start(0)` y se actualiza `estaReproduciendo` a `true`.

5. **Agregar controlador de eventos al botón "Play"**: Se selecciona el elemento del botón con el id `playButton` utilizando `document.getElementById()`. Luego, se agrega un event listener que escucha el evento de clic en el botón. Cuando se hace clic en el botón, se llama a la función `alternarOscilador()` para iniciar o detener la reproducción del oscilador, dependiendo de su estado actual.
