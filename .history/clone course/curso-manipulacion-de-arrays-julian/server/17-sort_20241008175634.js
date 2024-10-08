const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a,b) => a - b);
console.log(numbers);
const words = [
    "réservé",
    "premier",
    "communiqué",
    "café",
    "adieu",
    "éclair",
    "banana",
];
words.sort((a,b) => a.localeCompare(b));
console.log(words);
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
orders.sort((a,b) => b.total - a.total);
console.log(orders);

///////////////////////////////

const ordersE1 = [
    {
        customerName: 'Nicolas',
        total: 600,
        delivered: true,
        date: new Date(2021, 1, 1, 15),
    },
    {
        customerName: 'Zulema',
        total: 120,
        delivered: false,
        date: new Date(2021, 1, 1, 10),
    },
    {
        customerName: 'Santiago',
        total: 1840,
        delivered: true,
        date: new Date(2021, 1, 1, 20),
    },
    {
        customerName: 'Valentina',
        total: 240,
        delivered: true,
        date: new Date(2021, 1, 1, 8),
    },
];
const ordersSorted = ordersE1.sort((a, b) => {
    return a.date.getTime() - b.date.getTime();
});

console.log(ordersSorted);


/////////////////

// Fecha de inicio: 1 de enero de 2023
const fechaInicio = new Date('2023-01-01');

// Fecha actual
const fechaActual = new Date();

// Obtener el tiempo en milisegundos de ambas fechas
const tiempoInicio = fechaInicio.getTime();
const tiempoActual = fechaActual.getTime();

// Calcular la diferencia en milisegundos
const diferenciaMilisegundos = tiempoActual - tiempoInicio;

// Convertir la diferencia a días
const milisegundosEnUnDia = 1000 * 60 * 60 * 24;
const diferenciaDias = Math.floor(diferenciaMilisegundos / milisegundosEnUnDia);

console.log(diferenciaDias);
