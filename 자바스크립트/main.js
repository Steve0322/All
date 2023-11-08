const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

const a = [];
const myArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
for(let i = 0; i < 6; i++) {
  const randomIndex = Math.floor(Math.random() * myArray.length);
  const randomValue = myArray[randomIndex];
  a[i] = randomValue;
}

console.log(a);
