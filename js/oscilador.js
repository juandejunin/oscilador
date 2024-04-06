// window.onload = function () {
//   // Se asegura de que se utiliza el contexto de audio adecuado en todos los navegadores
//   window.AudioContext = window.AudioContext || window.webkitAudioContext;

//   // Inicialización de variables globales
//   var contextoDeAudio = new AudioContext();
//   var estaReproduciendo = false;
//   var nodoFuente = null;
//   var frecuencia = 220


//   // Alterna la reproducción de un oscilador en el navegador
//   function alternarOscilador() {
//     var control = document.getElementById("controlDeFrecuenciaRango");
//     frecuencia = control.value;
//     console.log(frecuencia)
//     if (estaReproduciendo) {
//       // Detiene la reproducción y retorna
//       nodoFuente.stop(0);
//       nodoFuente = null;
//       estaReproduciendo = false;
//       return "Reproducir oscilador";
//     }

//     nodoFuente = contextoDeAudio.createOscillator();
//     nodoFuente.frequency.value = frecuencia; // Frecuencia predeterminada: 440 Hz
//     nodoFuente.connect(contextoDeAudio.destination);
//     nodoFuente.start(0);
//     estaReproduciendo = true;

//     return "Detener";
//   }

//   // Agregar controlador de eventos de clic al botón "Play" para disparar el oscilador
//   document.getElementById("playButton").addEventListener("click", function() {
//     alternarOscilador();
//   });
// };


window.onload = function () {
  // Se asegura de que se utiliza el contexto de audio adecuado en todos los navegadores
  window.AudioContext = window.AudioContext || window.webkitAudioContext;

  // Inicialización de variables globales
  var contextoDeAudio = new AudioContext();
  var estaReproduciendo = false;
  var nodoFuente = null;
  var frecuencia = 440;

  // Función para actualizar el valor del input de texto con el valor del input de rango
  function actualizarValorDeTexto(valor) {
    document.getElementById("controlDeFrecuenciaTexto").value = valor;
  }

  // Alterna la reproducción de un oscilador en el navegador
  function alternarOscilador() {
    if (estaReproduciendo) {
      // Detiene la reproducción y retorna
      nodoFuente.stop(0);
      estaReproduciendo = false;
      return "Reproducir oscilador";
    }

    nodoFuente = contextoDeAudio.createOscillator();
    nodoFuente.frequency.value = frecuencia; // Frecuencia predeterminada: 440 Hz
    nodoFuente.connect(contextoDeAudio.destination);
    nodoFuente.start(0);
    estaReproduciendo = true;

    return "Detener";
  }

  // Agregar controlador de eventos de input al input de rango para actualizar el valor del input de texto y el sonido
  document
    .getElementById("controlDeFrecuenciaRango")
    .addEventListener("input", function (event) {
      var valor = event.target.value;
      frecuencia = valor;
      actualizarValorDeTexto(valor); // Actualiza el valor del input de texto
      if (estaReproduciendo) {
        // Si se está reproduciendo, detiene el sonido actual y lo vuelve a iniciar con la nueva frecuencia
        nodoFuente.stop(0);
        nodoFuente = contextoDeAudio.createOscillator();
        nodoFuente.frequency.value = frecuencia;
        nodoFuente.connect(contextoDeAudio.destination);
        nodoFuente.start(0);
      }
    });

  // Agregar controlador de eventos de clic al botón "Play" para disparar el oscilador
  document.getElementById("playButton").addEventListener("click", function () {
    document.getElementById("playButton").textContent = alternarOscilador();
  });
};

