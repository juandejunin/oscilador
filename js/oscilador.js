// window.onload = function () {
//   // Se asegura de que se utiliza el contexto de audio adecuado en todos los navegadores
//   window.AudioContext = window.AudioContext || window.webkitAudioContext;

//   // Inicialización de variables globales
//   var contextoDeAudio = new AudioContext();
//   var estaReproduciendo = false;
//   var nodoFuente = null;
//   var frecuencia = 220;

//   // Función para actualizar el valor del input de rango y el sonido
//   function actualizarFrecuencia(valor) {
//     frecuencia = valor;
//     document.getElementById("controlDeFrecuenciaRango").value = valor; // Actualiza el valor del input de rango
//     if (estaReproduciendo && nodoFuente !== null) {
//       // Si se está reproduciendo, detiene el sonido actual y lo vuelve a iniciar con la nueva frecuencia
//       nodoFuente.stop(0);
//       nodoFuente = contextoDeAudio.createOscillator();
//       nodoFuente.frequency.value = frecuencia;
//       nodoFuente.connect(contextoDeAudio.destination);
//       nodoFuente.start(0);
//     }
//   }

//   // Agregar controlador de eventos de input al input de rango para actualizar el valor del input de texto y el sonido
//   document
//     .getElementById("controlDeFrecuenciaRango")
//     .addEventListener("input", function (event) {
//       var valor = event.target.value;
//       actualizarFrecuencia(valor);
//       document.getElementById("controlDeFrecuenciaTexto").value = valor; // Actualiza el valor del input de texto
//     });

//   // Agregar controlador de eventos de input al input de texto para actualizar la frecuencia y el sonido
//   document
//     .getElementById("controlDeFrecuenciaTexto")
//     .addEventListener("input", function (event) {
//       var valor = event.target.value;
//       actualizarFrecuencia(valor);
//       document.getElementById("controlDeFrecuenciaRango").value = valor; // Actualiza el valor del input de rango
//     });

//   // Agregar controlador de eventos de clic al botón "Play" para disparar el oscilador
//   document.getElementById("playButton").addEventListener("click", function () {
//     if (estaReproduciendo) {
//       // Detiene la reproducción y retorna
//       nodoFuente.stop(0);
//       estaReproduciendo = false;
//       document.getElementById("playButton").textContent = "Play";
//     } else {
//       // Inicia la reproducción
//       nodoFuente = contextoDeAudio.createOscillator();
//       nodoFuente.frequency.value = frecuencia;
//       nodoFuente.connect(contextoDeAudio.destination);
//       nodoFuente.start(0);
//       estaReproduciendo = true;
//       document.getElementById("playButton").textContent = "Stop";
//     }
//   });
// };


window.onload = function () {
  // Se asegura de que se utiliza el contexto de audio adecuado en todos los navegadores
  window.AudioContext = window.AudioContext || window.webkitAudioContext;

  // Inicialización de variables globales
  var contextoDeAudio = new AudioContext();
  var estaReproduciendo = false;
  var nodoFuente = null;
  var frecuencia = 440; // Cambié la frecuencia predeterminada a 440 Hz

  // Función para actualizar el valor del input de rango y el sonido
  function actualizarFrecuencia(valor) {
    frecuencia = valor;
    document.getElementById("controlDeFrecuenciaRango").value = valor; // Actualiza el valor del input de rango
    if (estaReproduciendo && nodoFuente !== null) {
      // Si se está reproduciendo, detiene el sonido actual y lo vuelve a iniciar con la nueva frecuencia
      nodoFuente.stop(0);
      nodoFuente = contextoDeAudio.createOscillator();
      nodoFuente.frequency.value = frecuencia;
      nodoFuente.connect(contextoDeAudio.destination);
      nodoFuente.start(0);
    }
  }

  // Agregar controlador de eventos de input al input de rango para actualizar el valor del input de texto y el sonido
  document
    .getElementById("controlDeFrecuenciaRango")
    .addEventListener("input", function (event) {
      var valor = event.target.value;
      actualizarFrecuencia(valor);
      document.getElementById("controlDeFrecuenciaTexto").value = valor; // Actualiza el valor del input de texto
    });

  // Agregar controlador de eventos de input al input de texto para actualizar la frecuencia y el sonido
  document
    .getElementById("controlDeFrecuenciaTexto")
    .addEventListener("input", function (event) {
      var valor = event.target.value;
      actualizarFrecuencia(valor);
      document.getElementById("controlDeFrecuenciaRango").value = valor; // Actualiza el valor del input de rango
    });



// Función para disminuir la frecuencia en 1 Hz
function disminuirFrecuencia() {
  var inputFrecuencia = document.getElementById("controlDeFrecuenciaTexto");
  var nuevaFrecuencia = parseFloat(inputFrecuencia.value) -  1;
  
  // Actualizar el valor del input de texto con la nueva frecuencia
  inputFrecuencia.value = nuevaFrecuencia;

  // Llamar a actualizarFrecuencia() independientemente del valor máximo permitido
  actualizarFrecuencia(nuevaFrecuencia);
}

// Función para aumentar la frecuencia en 1 Hz
function aumentarFrecuencia() {
  var inputFrecuencia = document.getElementById("controlDeFrecuenciaTexto");
  var nuevaFrecuencia = parseFloat(inputFrecuencia.value) + 1;
  
  // Actualizar el valor del input de texto con la nueva frecuencia
  inputFrecuencia.value = nuevaFrecuencia;

  // Llamar a actualizarFrecuencia() independientemente del valor máximo permitido
  actualizarFrecuencia(nuevaFrecuencia);
}


  // Agregar controlador de eventos de clic al botón "Menos Frecuencia" para disminuir la frecuencia
  document.getElementById("menosFrecuencia").addEventListener("click", function () {
    disminuirFrecuencia();
  });

  // Agregar controlador de eventos de clic al botón "Más Frecuencia" para aumentar la frecuencia
  document.getElementById("masFrecuencia").addEventListener("click", function () {
    aumentarFrecuencia();
  });

  // Agregar controlador de eventos de clic al botón "Play" para disparar el oscilador
  document.getElementById("playButton").addEventListener("click", function () {
    if (estaReproduciendo) {
      // Detiene la reproducción y retorna
      nodoFuente.stop(0);
      estaReproduciendo = false;
      document.getElementById("playButton").textContent = "Reproducir oscilador";
    } else {
      // Inicia la reproducción
      nodoFuente = contextoDeAudio.createOscillator();
      nodoFuente.frequency.value = frecuencia;
      nodoFuente.connect(contextoDeAudio.destination);
      nodoFuente.start(0);
      estaReproduciendo = true;
      document.getElementById("playButton").textContent = "Detener";
    }
  });
};
