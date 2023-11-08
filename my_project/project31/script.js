const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
const container = document.querySelector('.container');
const randomColor = document.getElementById('color');
const changeColorBtn = document.getElementById('clr-button');

changeColorBtn.addEventListener('click', function() {
  getNewColor();
  changeColor();
});
let newColor = [];
function getNewColor() {
  newColor = [];
  
  for(let i = 0; i < 6; i++) {
    const randomValue = colors[Math.floor(Math.random() * colors.length)];
    newColor[i] = randomValue;
    
  }
  newColor = newColor.join('');
  console.log(newColor);

}

function changeColor() {
  randomColor.innerHTML = `<p>#${newColor}</p>`;
  container.style.backgroundColor = `#${newColor}`;
  randomColor.style.color = `#${newColor}`;
}
