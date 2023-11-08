


// // my code

// const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
// const container = document.querySelector('.container');
// const randomColor = document.getElementById('color');
// const changeColorBtn = document.getElementById('clr-button');

// changeColorBtn.addEventListener('click', function() {
//   getNewColor();
//   changeColor();
// });
// let newColor = [];
// function getNewColor() {
//   newColor = [];
  
//   for(let i = 0; i < 6; i++) {
//     const randomValue = colors[Math.floor(Math.random() * colors.length)];
//     newColor[i] = randomValue;
    
//   }
//   newColor = newColor.join('');
//   console.log(newColor);

// }

// function changeColor() {
//   randomColor.innerHTML = `<p>#${newColor}</p>`;
//   container.style.backgroundColor = `#${newColor}`;
//   randomColor.style.color = `#${newColor}`;
// }





























// gpt code

// 사용 가능한 16진수 색상 문자를 나타내는 문자열
const colors = '0123456789abcdef';

// HTML 문서에서 요소를 가져오기
const container = document.querySelector('.container'); // 배경 색상을 변경할 요소
const randomColor = document.getElementById('color'); // 랜덤 색상 값을 표시할 요소
const changeColorBtn = document.getElementById('clr-button'); // 색상 변경 버튼

// 색상 변경 버튼에 클릭 이벤트 리스너를 추가
changeColorBtn.addEventListener('click', () => {
  const newColor = getRandomColor(); // 랜덤 색상 생성
  updateColors(newColor); // 요소의 스타일을 업데이트하여 색상 변경
});

// 랜덤 색상을 생성하는 함수
function getRandomColor() {
  let color = '#'; // 16진수 색상 코드를 나타내는 문자열로 초기화
  for (let i = 0; i < 6; i++) {
    // 16진수 문자를 무작위로 선택하여 색상 코드에 추가
    color += colors[Math.floor(Math.random() * 16)];
  }
  return color; // 완성된 랜덤 색상 코드 반환
}

// 요소의 스타일을 변경하여 색상을 업데이트하는 함수
function updateColors(newColor) {
  container.style.backgroundColor = newColor; // 배경 색상 변경
  randomColor.innerHTML = `<p>${newColor}</p>`; // 색상 값을 요소에 표시
  randomColor.style.color = newColor; // 텍스트 색상 변경
}
