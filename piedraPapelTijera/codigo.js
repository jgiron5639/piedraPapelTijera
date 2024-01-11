function jugar(eleccionUsuario) {
    var opciones = ['piedra', 'papel', 'tijera'];
    var eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    var resultado;

    if (eleccionUsuario === eleccionComputadora) {
      resultado = 'Empate';
    } else if (
      (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijera') ||
      (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
      (eleccionUsuario === 'tijera' && eleccionComputadora === 'papel')
    ) {
      resultado = '¡Ganaste!';
    } else {
      resultado = 'La computadora ganó';
    }

    document.getElementById('resultado').textContent = `Elegiste ${eleccionUsuario}. La computadora eligió ${eleccionComputadora}. ${resultado}`;
  }