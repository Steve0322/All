const body = document.querySelector('body');
const hr = document.querySelector('.hr');
const mn = document.querySelector('.mn');
const sc = document.querySelector('.sc');

setInterval(() => {
  let day = new Date();

  let hourDeg = day.getHours() * 30;
  let minDeg = day.getMinutes() * 6;
  let secDeg = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hourDeg + minDeg / 12}deg)`;

  mn.style.transform = `rotateZ(${minDeg}deg)`;
  sc.style.transform = `rotateZ(${secDeg}deg)`;
});

function toggleClass() {
  body.classList.toggle('light');
}