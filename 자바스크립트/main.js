let sw = 0;
let count = 0;
document.querySelector("h1").addEventListener("click", function() {
  

  if (sw == 0) {
    document.querySelector("h1").style.color = "blue";
    sw += 1;
    
  } else {
    document.querySelector("h1").style.color = "black";
    sw -= 1;
  }
})