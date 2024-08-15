function lanzarDados(jugadores) {
    // Validación: Se necesitan al menos 2 jugadores
    if (jugadores.length < 2) {
      console.error("Necesita al menos dos jugadores");
      return; // Detenemos la ejecución
    }
  
    // Array para almacenar los resultados de cada jugador
    const resultados = [];
  
    // Simular el lanzamiento de los dados para cada jugador
    jugadores.forEach(() => {
      const resultado = Math.floor(Math.random() * 6) + 1; // Número aleatorio entre 1 y 6
      resultados.push(resultado);
    });
  
    // Comparar resultados y determinar el ganador
    const [resultadoJugador1, resultadoJugador2, ...restantes] = resultados; // Desestructuración para obtener los primeros dos resultados
  
    if (resultadoJugador1 > resultadoJugador2) {
      console.log("El ganador es el Jugador 1");
    } else if (resultadoJugador2 > resultadoJugador1) {
      console.log("El ganador es el Jugador 2");
    } else {
      console.log("¡Empate!");
    }
  
    // Manejar más de dos jugadores (opcional)
    if (restantes.length > 0) {
      console.log("Hubo más de dos jugadores, pero solo se comparan los primeros dos.");
    }
  }
  
  // Ejemplo de uso:
  const jugadores = ["Ana", "Juan", "Pedro"]; // Array de nombres de jugadores
  lanzarDados(jugadores);
  