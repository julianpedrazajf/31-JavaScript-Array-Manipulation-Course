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