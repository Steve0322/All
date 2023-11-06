const numbersDiv = document.querySelector(".numbers");
const drawButton = document.querySelector("#draw");
const resetButton = document.querySelector("#reset");

const lottoNumbers = [];
const colors = ["#ffff96","#ffd187","#d2ffd2","#a7eeff","#cbff75"];

function paintNumber(number) {
  const eachNumDiv = document.createElement("div");
  let colorIndex = Math.floor(number / 10);
  eachNumDiv.classList.add("eachnum");
  eachNumDiv.style.backgroundColor = colors[colorIndex]
  eachNumDiv.textContent = number;
  numbersDiv.appendChild(eachNumDiv);
}

drawButton.addEventListener("click", function() {
  while(lottoNumbers.length < 6) {
    let ran = Math.floor(Math.random() * 45) + 1;
    if (lottoNumbers.indexOf(ran) === -1) {
      lottoNumbers.push(ran);
      paintNumber(ran);
    };
  };
});

resetButton.addEventListener("click", function() {
  lottoNumbers.splice(0,6);
  numbersDiv.innerHTML = "";
})