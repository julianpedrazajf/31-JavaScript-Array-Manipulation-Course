const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

const newArray = elements;
for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    newArray.push(element);
}
console.log('for', newArray);