window.onload = function () {
  // Se asegura de que se utiliza el contexto de audio adecuado en todos los navegadores
  window.AudioContext = window.AudioContext || window.webkitAudioContext;

  // Inicialización de variables globales
  var contextoDeAudio = new AudioContext();
  var estaReproduciendo = false;
  var nodoFuente = null;

  // Alterna la reproducción de un oscilador en el navegador
  function alternarOscilador() {
    if (estaReproduciendo) {
      // Detiene la reproducción y retorna
      nodoFuente.stop(0);
      nodoFuente = null;
      estaReproduciendo = false;
      return "Reproducir oscilador";
    }

    nodoFuente = contextoDeAudio.createOscillator();
    nodoFuente.frequency.value = 440; // Frecuencia predeterminada: 440 Hz
    nodoFuente.connect(contextoDeAudio.destination);
    nodoFuente.start(0);
    estaReproduciendo = true;

    return "Detener";
  }

  // Agregar controlador de eventos de clic al botón "Play" para disparar el oscilador
  document.getElementById("playButton").addEventListener("click", function() {
    alternarOscilador();
  });
};
