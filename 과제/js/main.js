
// 모달 창

document.addEventListener("DOMContentLoaded", function () {
  function openModal() {
    modal.style.display = "block";
    const imgSrc = this.querySelector("img").getAttribute("src");
    const imgAlt = this.querySelector("img").getAttribute("alt");
    modalImg.setAttribute("src", imgSrc);
    modalImg.setAttribute("alt", imgAlt);
    const imgTxt = this.querySelector("p").textContent;
    const imgTit = this.querySelector("span").textContent;

    modalText.textContent = imgTxt;
    modalTitle.textContent = imgTit;
  }

  function closeModal() {
    modal.style.display = "none";
  }

  const modal = document.querySelector(".modal");
  const modalImg = document.querySelector(".modalBox img");
  const modalText = document.querySelector(".modalBox p");
  const modalTitle = document.querySelector(".modalBox span");

  const imgElements = document.querySelectorAll(".imgC");

  imgElements.forEach(function (imgElement) {
    imgElement.addEventListener("click", openModal);
  });

  const closeButton = document.querySelector(".modal button");
  closeButton.addEventListener("click", closeModal);

  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }
  });
});

//메뉴 버튼 & 오버레이 

let sw = 0;
let a = document.querySelector('.overlay');
document.querySelector('.menu-button').addEventListener('click', function () {
  sw = !sw;
  if (sw) {
    a.style.zIndex = 0;
  } else {
    setTimeout(() => { a.style.zIndex = -1 }, 300);

  }
  setTimeout(() => {

    document.querySelector('.menu-button').classList.toggle('on');
    document.querySelector('.menu-bar').classList.toggle('on');
    document.querySelector('.overlay').classList.toggle('on');
  }, 100)


})
document.querySelector('.overlay').addEventListener('click', function () {

  setTimeout(() => { a.style.zIndex = -1; }, 300);
  sw = !sw;
  document.querySelector('.menu-button').classList.remove('on');
  document.querySelector('.menu-bar').classList.remove('on');
  document.querySelector('.overlay').classList.remove('on');
})

// 슬라이드

const slide = document.querySelector(".slide");
let slideWidth = slide.clientWidth;


const prevBtn = document.querySelector(".slide-prev-button");
const nextBtn = document.querySelector(".slide-next-button");


let slideItems = document.querySelectorAll(".slide-item");

const maxSlide = slideItems.length;


let currSlide = 1;


const pagination = document.querySelector(".slide-pagination");

for (let i = 0; i < maxSlide; i++) {
  if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
  else pagination.innerHTML += `<li>•</li>`;
}

const paginationItems = document.querySelectorAll(".slide-pagination > li");


const startSlide = slideItems[0];
const endSlide = slideItems[slideItems.length - 1];
const startElem = document.createElement("div");
const endElem = document.createElement("div");

endSlide.classList.forEach((c) => endElem.classList.add(c));
endElem.innerHTML = endSlide.innerHTML;

startSlide.classList.forEach((c) => startElem.classList.add(c));
startElem.innerHTML = startSlide.innerHTML;


slideItems[0].before(endElem);
slideItems[slideItems.length - 1].after(startElem);


slideItems = document.querySelectorAll(".slide-item");

let offset = slideWidth + currSlide;
slideItems.forEach((i) => {
  i.setAttribute("style", `left: ${-offset}px`);
});

function nextMove() {
  currSlide++;

  if (currSlide <= maxSlide) {

    const offset = slideWidth * currSlide;

    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {

    currSlide = 0;
    let offset = slideWidth * currSlide;
    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide++;
    offset = slideWidth * currSlide;

    setTimeout(() => {

      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}
function prevMove() {
  currSlide--;

  if (currSlide > 0) {

    const offset = slideWidth * currSlide;

    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  } else {

    currSlide = maxSlide + 1;
    let offset = slideWidth * currSlide;

    slideItems.forEach((i) => {
      i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
    });
    currSlide--;
    offset = slideWidth * currSlide;
    setTimeout(() => {

      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
        i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
      });
    }, 0);

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  }
}


nextBtn.addEventListener("click", () => {

  nextMove();
});

prevBtn.addEventListener("click", () => {

  prevMove();
});


window.addEventListener("resize", () => {
  slideWidth = slide.clientWidth;
});


for (let i = 0; i < maxSlide; i++) {

  paginationItems[i].addEventListener("click", () => {

    currSlide = i + 1;

    const offset = slideWidth * currSlide;

    slideItems.forEach((i) => {
      i.setAttribute("style", `left: ${-offset}px`);
    });

    paginationItems.forEach((i) => i.classList.remove("active"));
    paginationItems[currSlide - 1].classList.add("active");
  });
}


let startPoint = 0;
let endPoint = 0;


slide.addEventListener("mousedown", (e) => {
  startPoint = e.pageX;
});

slide.addEventListener("mouseup", (e) => {
  endPoint = e.pageX;
  if (startPoint < endPoint) {

    prevMove();
  } else if (startPoint > endPoint) {

    nextMove();
  }
});


slide.addEventListener("touchstart", (e) => {
  startPoint = e.touches[0].pageX;
});
slide.addEventListener("touchend", (e) => {
  endPoint = e.changedTouches[0].pageX;
  if (startPoint < endPoint) {

    prevMove();
  } else if (startPoint > endPoint) {

    nextMove();
  }
});


let loopInterval = setInterval(() => {
  nextMove();
}, 3000);


slide.addEventListener("mouseover", () => {
  clearInterval(loopInterval);
});


slide.addEventListener("mouseout", () => {
  loopInterval = setInterval(() => {
    nextMove();
  }, 3000);
});