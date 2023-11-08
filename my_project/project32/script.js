const reset = document.querySelector('.reset-btn');
const dec = document.querySelector('.dec-btn');
const inc = document.querySelector('.inc-btn');
const counter = document.getElementById('count');


let count = 0;




reset.addEventListener('click', function() {
  count = 0;
  counter.innerHTML = `${count}`;
  counter.style.color = 'black';
})

dec.addEventListener('click', function() {
  count -= 1;
  counter.innerHTML = `${count}`
  if (count <= -1) {
    counter.style.color = 'red';
  }
})

inc.addEventListener('click', function() {
  count += 1;
  counter.innerHTML = `${count}`;
  if (count >= 1) {
    counter.style.color = 'green';
  }
})


































































