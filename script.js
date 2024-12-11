// RGB Colors
let red = document.getElementById("redIn");
let green = document.getElementById("greenIn");
let blue = document.getElementById("blueIn");
let strOut = document.getElementById("rgbStrOut");
let displayEl = document.getElementById("display");
//
//
//
red.addEventListener("input", clickedBtn);
green.addEventListener("input", clickedBtn);
blue.addEventListener("input", clickedBtn);

document.getElementById("widthBtn").addEventListener("input", clickedWidth);

function clickedWidth() {
  let width = +document.getElementById("widthBtn").value;

  if (width > 400) {
    width = 400;
    document.getElementById("widthBtn").value = 400;
  } else if (width < 50) {
    width = 50;
    document.getElementById("widthBtn").value = 50;
  }
  document.getElementById("display").style.width = width + "px";
}
document.getElementById("heightBtn").addEventListener("input", clickedheight);

function clickedheight() {
  let height = +document.getElementById("heightBtn").value;
  if (height > 200) {
    height = 200;
    document.getElementById("heightBtn").value = 200;
  } else if (height < 50) {
    height = 50;
    document.getElementById("heightBtn").value = 50;
  }
  document.getElementById("display").style.height = height + "px";
}

function clickedBtn() {
  let r = +red.value;
  let g = +green.value;
  let b = +blue.value;
  if (r < 0) {
    r = 0;
    red.value = 0;
  } else if (r > 255) {
    r = 0;
    red.value = 0;
  }
  if (g < 0) {
    g = 0;
    green.value = 0;
  } else if (r > 255) {
    g = 0;
    green.value = 0;
  }
  if (b < 0) {
    b = 0;
    blue.value = 0;
  } else if (r > 255) {
    r = 0;
    red.value = 0;
  }
  let answer = "rgb(" + r + ", " + g + ", " + b + ")";
  console.log(answer);
  strOut.innerHTML = answer;
  displayEl.style.background = answer;
}
