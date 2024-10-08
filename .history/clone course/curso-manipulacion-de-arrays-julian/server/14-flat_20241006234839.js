const matriz = [
    [1,2,3], // 0
    [4,5,6],
    [7,8,9]
];

const newArray = [];
for (let i = 0; index < matriz.length; i++) {
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = array[i][j];
        newArray.push(element);
    }
    
}