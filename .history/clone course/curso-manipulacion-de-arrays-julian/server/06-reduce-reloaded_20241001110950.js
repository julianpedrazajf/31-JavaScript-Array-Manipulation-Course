const items = [1, 3, 2, 3, 3, 1, 10];

const rta = items.reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta);
// output
/* 
{
    1: 1,
    3: 2,
    2: 1,
} 
}, {});
*/

const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Santiago",
      level: "low",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "hight",
    },
  ];

  const rta1 = data
  .map(item => item.level)
  .reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 1;
    } else {
        obj[item] = obj[item] + 1;
    }
    return obj;
}, {});

console.log(rta1);

// reto
const arr = [3, 10, 9, 4, 3, 1, 8, 4, 7, 6];
const result = arr.reduce((obj, item) => {
  if (item <= 5) {
    obj['1-5']++
  } else if (item <= 8) {
    obj['6-8']++
  } else {
    obj['9-10']++
  }
  return obj
}, {
  '1-5': 0,
  '6-8': 0,
  '9-10': 0
})

console.log(result);


/* Tienes un array de números y tu reto es retornar la suma de todos los valores en él.

Para solucionarlo vas a encontrar una función llamada calcSum que recibe un parámetro de entrada:

numbers: Un array de números
Dentro del cuerpo de la función calcSum debes escribir tu solución.

Ejemplo 1:

Input: [1, 1, 1]
Ouput: 3

Ejemplo 2:

Input: [2, 4, 8]
Output: [2, 4, 8]

Ejemplo 3:

Input: []
Output: 0 */

export function calcSum(numbers) {
    // Tu código aquí 👈
    return numbers.reduce((sumA, sumB) => sumA + sumB, 0)
  };

 /*  Recorda de inicializar el acumulador al final para que el valor sea el correcto. return numbers.reduce( (a, b) => a + b,0) */