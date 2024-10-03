const numbers = [1,30,49,29,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false
    }
}
console.log('for', rta);

const rta2 = numbers.every(item => item <= 40);
console.log('rta2', rta2);

////////////////////

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Santiago",
      age: 18,
    },
  ];

  const esEquipoValido = team.every( persona => persona.age >= 15);

  //Con if
/*   if ( esEquipoValido ) {
      console.log("Equipo admitido");
  } else {
      console.log("Equipo no admitido");
  }; */
  
  //Con operador ternario
  const mensaje = esEquipoValido
          ? "Equipo admitido"
          : "Equipo no admitido";
  
  console.log(mensaje);

/*   Tu reto es retornar true si dentro de array de números todos son pares, para solucionarlo vas a encontrar una función llamada checkArray que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función checkArray debes escribir tu solución.

Ejemplo 1:

Input: [2, 4, 6, 8, 10]
Output: true

Ejemplo 2:

Input: [1, 3, 5, 7, 10, 11]
Output: false

Ejemplo 3:

Input: [1, 3, 5]
Output: false

Ejemplo 4:

Input: []
Output: false */

export function checkArray(array) {
  // Tu código aquí 👈
  return array.length == 0?
    false : array.every(item => item % 2 === 0);
}