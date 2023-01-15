let precioJuego = 3460;

function descuento(porcentaje) {
  let calculo = precioJuego - (porcentaje / 100) * precioJuego;
  return alert(
    `El precio final con 10% de descuento al pagar en efectivo pasaria de $${precioJuego} a $${calculo}. Estarias ahorrando $${
      precioJuego - calculo
    } al pagar de este modo.`
  );
}

let salirCarrito = true;
do {
  let opcionCarrito = prompt(`Juego en el Carrito:

  - Age of Empires II y su valor es de $${precioJuego}

  Seleccione una tarea de la lista:
    1 - Calcular el precio pagando en cuotas
    2 - Calcular el precio final pagando en efectivo
    
    0 - Salir del ménu
    `);
  switch (opcionCarrito) {
    case "1":
      let calcularCuotas = parseInt(
        prompt(`Ingrese el número de cuotas que quiere calcular:
        
      3 cuotas sin interés
      6 cuotas sin interés
      12 cuotas (recargo del 20%)
      18 cuotas (recargo del 40%)
      `)
      );
      switch (calcularCuotas) {
        case 3:
          let precioTres = precioJuego / 3;
          console.log(
            `El precio de cada cuota va a ser de $${precioTres.toFixed(
              2
            )} si se paga en ${calcularCuotas} cuotas sin interés`
          );
          break;
        case 6:
          let precioSeis = precioJuego / 6;
          console.log(
            `El precio de cada cuota va a ser de $${precioSeis.toFixed(
              2
            )} si se paga en ${calcularCuotas} cuotas sin interés`
          );
          break;
        case 12:
          let precioDoce = (0.2 * precioJuego + precioJuego) / 12;
          let precioTotalDoce = precioDoce * 12;
          console.log(
            `El precio de cada cuota va a ser de $${precioDoce.toFixed(
              2
            )} si se paga en ${calcularCuotas} cuotas con 20% de interés. El precio final del juego pasaria de $${precioJuego} a $${precioTotalDoce}
            `
          );
          break;
        case 18:
          let precioDieciocho = (0.4 * precioJuego + precioJuego) / 18;
          let precioTotalDieciocho = precioDieciocho * 18;
          console.log(
            `El precio de cada cuota va a ser de $${precioDieciocho.toFixed(
              2
            )} si se paga en ${calcularCuotas} cuotas con 40% de interés. El precio final del juego pasaria de $${precioJuego} a $${precioTotalDieciocho}
            `
          );
          break;
        default:
          let opcionInvalida = alert(
            `Por favor ingrese solamente el número de cuotas que quiere pagar, ya sea 3, 6, 12 o 18`
          );
          break;
      }
      break;
    case "2":
      descuento(10);
      break;
    case "0":
      console.log("Salir del Carrito");
      salirCarrito = false;
      break;
    default:
      alert(
        `Por favor ingrese el número de la opción que quiere elegir, ya sea 1, 2 o 0 en caso de querer abandonar el Carrito`
      );
      break;
  }
} while (salirCarrito);
