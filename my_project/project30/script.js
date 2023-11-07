// const inputElement = document.getElementById('input');
// const inputValue = inputElement.value;
// const NumberValue = Number(inputValue);
// const container = document.querySelector('#container');
// const btn = document.getElementById('btn');


// btn.addEventListener('click', function() {
// alert(inputValue);
// alert(NumberValue);
//   if (/^\d+$/.test(NumberValue) === true) {
//     alert("타이머 설정 : " + NumberValue);
//     printNow();
    
//   } else {
//     alert("숫자만 입력해주세요");
//   }

//   function printNow() {
//     const today = new Date();
    

//     const dayNames = [
//       '(일요일)',
//       '(월요일)',
//       '(화요일)',
//       '(수요일)',
//       '(목요일)',
//       '(금요일)',
//       '(토요일)'
//     ];

//     const day = dayNames[today.getDay()];

//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     const date = today.getDate();
//     let hour = today.getHours();
//     let minute = today.getMinutes();
//     let second = today.getSeconds();
//     const ampm = hour >= 12 ? 'PM' : 'AM';

//     hour %= 12;
//     hour = hour || 12;

//     minute = minute < 10 ? '0' + minute : minute;
//     second = second < 10 ? '0' + second : second;

//     count++;
//     con = container;
//     timer();
//     function timer(con) {
    
//       con.innerHTML(`<div>${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}</div>`)
//     }
    
    
    
    
//     if (count > 40) {
//       console.log('--------------------------\n꺼짐\n--------------------------');  
//     } else {
//       setTimeout(printNow, 1000);
//     }
    
//   };
// })



// let count = 1;




// const inputElement = document.getElementById('input');
// const container = document.querySelector('#container');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
//   const inputValue = inputElement.value;
//   const NumberValue = Number(inputValue);

 

//   if (/^\d+$/.test(inputValue)) {
//     alert("타이머 설정: " + NumberValue);
//     printNow();
//   } else {
//     alert("숫자만 입력해 주세요");
//   }

//   function printNow() {
//     const today = new Date();
//     const dayNames = [
//       '(일요일)',
//       '(월요일)',
//       '(화요일)',
//       '(수요일)',
//       '(목요일)',
//       '(금요일)',
//       '(토요일)'
//     ];

//     const day = dayNames[today.getDay()];

//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     const date = today.getDate();
//     let hour = today.getHours();
//     let minute = today.getMinutes();
//     let second = today.getSeconds();
//     const ampm = hour >= 12 ? '오후' : '오전';

//     hour %= 12;
//     hour = hour || 12;

//     minute = minute < 10 ? '0' + minute : minute;
//     second = second < 10 ? '0' + second : second;

//     container.innerHTML = `<div>${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}</div>`;

//     if (count > NumberValue) {
//       console.log('-----------\n끔\n------------- ------------');
//     } else {
//       setTimeout(printNow, 1000);
//     }
//   }
// });

// let count = 1;





// const inputElement = document.getElementById('input');
// const container = document.querySelector('#container');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
//   const inputValue = inputElement.value;
//   const NumberValue = Number(inputValue);

//   if (/^\d+$/.test(inputValue)) {
//     alert("타이머 설정: " + NumberValue);
//     printNow(NumberValue); // 전달 인수 수정
//   } else {
//     alert("숫자만 입력해 주세요");
//   }

//   function printNow(targetCount) { // 인수 이름 수정
//     const today = new Date();
//     const dayNames = [
//       '(일요일)',
//       '(월요일)',
//       '(화요일)',
//       '(수요일)',
//       '(목요일)',
//       '(금요일)',
//       '(토요일)'
//     ];

//     const day = dayNames[today.getDay()];

//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     const date = today.getDate();
//     let hour = today.getHours();
//     let minute = today.getMinutes();
//     let second = today.getSeconds();
//     const ampm = hour >= 12 ? '오후' : '오전';

//     hour %= 12;
//     hour = hour || 12;

//     minute = minute < 10 ? '0' + minute : minute;
//     second = second < 10 ? '0' + second : second;

//     container.innerHTML = `<div>${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}</div>`;

//     if (count < targetCount) { // 수정된 비교
//       count++;
//       setTimeout(() => printNow(targetCount), 1000); // 다시 호출하면서 targetCount 유지
//     } else {
//       console.log('-----------\n끔\n------------- ------------');
//     }
//   }
// });

// let count = 1;



// const inputElement = document.getElementById('input');
// const container = document.querySelector('#container');
// const btn = document.getElementById('btn');

// btn.addEventListener('click', function() {
//   const inputValue = inputElement.value;
//   const NumberValue = Number(inputValue);

//   if (/^\d+$/.test(inputValue)) {
//     alert("타이머 설정: " + NumberValue);
//     printNow(NumberValue);
//   } else {
//     alert("숫자만 입력해 주세요");
//   }

//   function printNow(targetCount) {
//     const today = new Date();
//     const dayNames = [
//       '(일요일)',
//       '(월요일)',
//       '(화요일)',
//       '(수요일)',
//       '(목요일)',
//       '(금요일)',
//       '(토요일)'
//     ];

//     const day = dayNames[today.getDay()];

//     const year = today.getFullYear();
//     const month = today.getMonth() + 1;
//     const date = today.getDate();
//     let hour = today.getHours();
//     let minute = today.getMinutes();
//     let second = today.getSeconds();
//     const ampm = hour >= 12 ? '오후' : '오전';

//     hour %= 12;
//     hour = hour || 12;

//     minute = minute < 10 ? '0' + minute : minute;
//     second = second < 10 ? '0' + second : second;

//     if (count < targetCount) {
//       container.innerHTML = `<div>${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}</div>`;
//       count++;
//       setTimeout(() => printNow(targetCount), 1000);
//     } else {
//       container.innerHTML = '<div>끔</div>'; // 타이머가 멈춘 후 "끔" 메시지 출력
//       console.log('-----------\n끔\n------------- ------------');
//     }
//   }
// });

// let count = 1;



// const inputElement = document.getElementById('input');
// const container = document.querySelector('#container');
// const btn = document.getElementById('btn');
// let timerId; // 타이머 ID를 저장할 변수 추가

// btn.addEventListener('click', function() {
//   const inputValue = inputElement.value;
//   const NumberValue = Number(inputValue);

//   if (/^\d+$/.test(inputValue)) {
//     alert("타이머 설정: " + NumberValue);
//     startTimer(NumberValue);
//   } else {
//     alert("숫자만 입력해 주세요");
//   }

//   function startTimer(targetCount) {
//     // 이전 타이머가 있으면 종료
//     if (timerId) {
//       clearTimeout(timerId);
//     }

//     let count = 1; // 타이머 시작 시 count 초기화

//     function printNow() {
//       const today = new Date();
//       const dayNames = [
//         '(일요일)',
//         '(월요일)',
//         '(화요일)',
//         '(수요일)',
//         '(목요일)',
//         '(금요일)',
//         '(토요일)'
//       ];

//       const day = dayNames[today.getDay()];

//       const year = today.getFullYear();
//       const month = today.getMonth() + 1;
//       const date = today.getDate();
//       let hour = today.getHours();
//       let minute = today.getMinutes();
//       let second = today.getSeconds();
//       const ampm = hour >= 12 ? '오후' : '오전';

//       hour %= 12;
//       hour = hour || 12;

//       minute = minute < 10 ? '0' + minute : minute;
//       second = second < 10 ? '0' + second : second;

//       if (count < targetCount) {
//         container.innerHTML = `<div>${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}</div>`;
//         count++;
//         timerId = setTimeout(printNow, 1000);
//       } else {
//         container.innerHTML = '<div>끔</div';
//         console.log('-----------\n끔\n------------- ------------');
//       }
//     }

//     printNow(); // 타이머 시작
//   }
// });




// const inputElement = document.getElementById('input');
// const container = document.querySelector('#container');
// const btn = document.getElementById('btn');
// let timerId; // 타이머 ID를 저장할 변수 추가

// btn.addEventListener('click', function() {
//   const inputValue = inputElement.value;
//   const NumberValue = Number(inputValue);

//   if (/^\d+$/.test(inputValue)) {
//     alert("타이머 설정: " + NumberValue);
//     startTimer(NumberValue);
//   } else {
//     alert("숫자만 입력해 주세요");
//   }

//   function startTimer(targetCount) {
//     // 이전 타이머가 있으면 종료
//     if (timerId) {
//       clearTimeout(timerId);
//     }

//     let count = 1; // 타이머 시작 시 count 초기화

//     function printNow() {
//       const today = new Date();
//       const dayNames = [
//         '(일요일)',
//         '(월요일)',
//         '(화요일)',
//         '(수요일)',
//         '(목요일)',
//         '(금요일)',
//         '(토요일)'
//       ];

//       const day = dayNames[today.getDay()];

//       const year = today.getFullYear();
//       const month = today.getMonth() + 1;
//       const date = today.getDate();
//       let hour = today.getHours();
//       let minute = today.getMinutes();
//       let second = today.getSeconds();
//       const ampm = hour >= 12 ? '오후' : '오전';

//       hour %= 12;
//       hour = hour || 12;

//       minute = minute < 10 ? '0' + minute : minute;
//       second = second < 10 ? '0' + second : second;

//       if (count < targetCount) {
//         container.innerHTML = `<div>${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}</div>`;
//         count++;
//         timerId = setTimeout(printNow, 1000); // 1초마다 업데이트
//       } else {
//         container.innerHTML = '<div>끔</div>';
//         console.log('-----------\n끔\n------------- ------------');

//         // "끔"을 표시한 후 5초 뒤에 다시 타이머를 시작
//         setTimeout(() => {
//           startTimer(targetCount);
//         }, 5000); // 5초(5000 밀리초) 대기 후 다시 시작
//       }
//     }

//     printNow(); // 타이머 시작
//   }
// });




const inputElement = document.getElementById('input');
const container = document.querySelector('#container');
const btn = document.getElementById('btn');
let timerId; // 타이머 ID를 저장할 변수 추가

btn.addEventListener('click', function() {
  const inputValue = inputElement.value;
  const NumberValue = Number(inputValue);

  if (/^\d+$/.test(inputValue)) {
    alert("타이머 설정: " + NumberValue + "초");
    startTimer(NumberValue);
  } else {
    alert("숫자만 입력해 주세요");
  }

  function startTimer(targetCount) {
    // 이전 타이머가 있으면 종료
    if (timerId) {
      clearTimeout(timerId);
    }

    let count = 0; // 타이머 시작 시 count 초기화

    function printNow() {
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

      if (count < targetCount) {
        container.innerHTML = `<div>${year}년 ${month}월 ${date}일 ${day} ${hour}:${minute}:${second} ${ampm}</div>`;
        count++;
        timerId = setTimeout(printNow, 1000); // 1초마다 업데이트
      } else {
        // 1초 대기 후 "끔" 표시
        setTimeout(() => {
          container.innerHTML = '<div>끝</div>';
          
        }, 300); // 1초(1000 밀리초) 대기 후 "끔" 출력
      }
    }

    printNow(); // 타이머 시작
  }
});
