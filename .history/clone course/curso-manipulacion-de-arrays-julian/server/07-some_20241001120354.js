// some es: almenos alguna

const numbers = [1, 2, 3, 4];

let rta = false;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta);

const rta2 = numbers.some(item => item %2 === 0);
console.log('rta2', rta2);

/////////////////////////////////////////////

const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];
  

 /*  const rta3 = orders.some(item => item.delivered);
  console.log('rta3', rta3); */


////////////////////

  const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
  };

  /* const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping'); */
  const { areIntervalsOverlapping } = require("date-fns");

  const isOverlap = (newData) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate},
            {start: newDate.startDate, end: newDate.endDate},
            
        )
    })
  }

  console.log('isOverLap', isOverlap(newAppointment));


  ///////////////////

/*   Para los que no le funciona la librería Aquí mi versión sin uso de ella: */


// exo 2

const dates1 = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
];

// My try

const obj1 = {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: "Cita de trabajo",
}

const obj2 = {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 13),
    title: "Cita de trabajo",
}

const datesOverlap = (start1, end1, start2, end2) => {
    if (start1 <= end2 && start2 <= end1) return true
    else return false;
}

//check

datesOverlap(obj1.startDate, obj1.endDate, obj2.startDate, obj2.endDate);

// exo

const newAppointmentt = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 1, 9, 30),
};
const newAppointment1 = {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 13),
};

const checkNewAppointmentAgainstDates = (newDates) => {
    return dates1.some(item => {
        return datesOverlap(item.startDate, item.endDate, newDates.startDate, newDates.endDate)
    })
}

console.log(checkNewAppointmentAgainstDates(newAppointmentt)); 
console.log(checkNewAppointmentAgainstDates(newAppointment1)); 