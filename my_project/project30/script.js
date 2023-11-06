let inputElement = document.getElementById('input');
  let inputValue = inputElement.value;
  let NumberValue = Number(inputValue);

const btn = getElementById('btn');
function getValue() {
  
  if (/^\d+$/.test(NumberValue) === true) {
    alert("타이머 설정 : " + NumberValue);
    printNow();
    
  } else {
    alert("숫자만 입력해주세요");
  }

}


let count = 1;
(function printNow() {
  const today = new Date();
  

  const dayNames = [
    '(일요일)',
    '(월요일)',
    '(화요일)',
    '(수요일)',
    '(목요일)',
    '(금요일)',
    '(토요일)'
  ];

  const day = dayNames[today.getDay()];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const ampm = hour >= 12 ? 'PM' : 'AM';

  hour %= 12;
  hour = hour || 12;

  minute = minute < 10 ? '0' + minute : minute;
  second = second < 10 ? '0' + second : second;

  const now = `${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}`;
  count++;
  
  console.log(now);
  
  if (count > NumberValue) {
    console.log('--------------------------\n꺼짐\n--------------------------');  
  } else {
    setTimeout(printNow, 1000);
  }
  
} ());




// const fibonacci = {

//   [Symbol.iterator]() {
//     let [pre, cur] = [0, 1];
//     const max = Infinity;

//     return {
//       next() {
//         [pre, cur] = [cur, pre + cur];

//         return { value: cur, done: cur == max  };
//       }
//     };
//   }
// };

// for (const num of fibonacci) {
//   console.log(num);
// }





// const Person = (function () {

//   function Person(name) {
//     this.name = name;
//   }
//   Person.prototype.sayHello = function () {
//     console.log(`Hi! My name is ${this.name}`);
//   }

//   return Person;
// }());

// const me = new Person('Lee');

// me.sayHello = function () {
//   console.log(`Hey! My name is ${this.name}`);
// };

// me.sayHello();


