const redInput = document.getElementById("red");
const greenInput = document.getElementById("green");
const blueInput = document.getElementById("blue");
const outcomeDiv = document.getElementById("outcome-div");
const outcomeDiv2 = document.getElementById("outcome-div2");
const submitBtn = document.getElementById("btn-submit");
const rgbValue = document.getElementById("rgb");
const rgbValue2 = document.getElementById("rgb2");

const colors2 = {
  red: null,
  green: null,
  blue: null,
};

let x;

const colors = {
  red: null,
  green: null,
  blue: null,
};

function makeColor(div, red, green, blue) {
  let html;
  html = div.style.backgroundColor = ` rgb(${red},${green},${blue})`;
  return html;
}

redInput.addEventListener("input", function () {
  makeColor(
    x ? outcomeDiv2 : outcomeDiv,
    parseInt(redInput.value),
    parseInt(greenInput.value ? greenInput.value : 0),
    parseInt(blueInput.value ? blueInput.value : 0)
  );

  if (x) {
    colors2.red = parseInt(redInput.value);
  } else {
    colors.red = parseInt(redInput.value);
  }
});

greenInput.addEventListener("input", function () {
  makeColor(
    x ? outcomeDiv2 : outcomeDiv,
    parseInt(redInput.value ? redInput.value : 0),
    parseInt(greenInput.value),
    parseInt(blueInput.value ? blueInput.value : 0)
  );
  if (x) {
    colors2.green = parseInt(greenInput.value);
  } else {
    colors.green = parseInt(greenInput.value);
  }
  console.log(outcomeDiv.style.backgroundColor);
});

blueInput.addEventListener("input", function () {
  makeColor(
    x ? outcomeDiv2 : outcomeDiv,
    parseInt(redInput.value ? redInput.value : 0),
    parseInt(greenInput.value ? greenInput.value : 0),
    parseInt(blueInput.value)
  );

  if (x) {
    console.log(x);
    colors2.blue = parseInt(blueInput.value);
  } else {
    colors.blue = parseInt(blueInput.value);
  }
});

submitBtn.addEventListener("click", function () {
  clearValues();
  insertHtmlInTheH2();
  x = 1;
  console.log(colors2.blue);
  console.log(colors2.red);
  console.log(colors2.green);
  console.log(colors.red);
  console.log(colors.green);
  console.log(colors.blue);
  //if (outcomeDiv2.style.backgroundColor) {
  //  x = null;
  //}
});

function clearValues() {
  redInput.value = "";
  greenInput.value = "";
  blueInput.value = "";
}

function insertHtmlInTheH2() {
  if (outcomeDiv.style.backgroundColor) {
    rgbValue.innerHTML = `${outcomeDiv.style.backgroundColor} <br> <h1 class="text-center">  click to turn to HEX </h1>`;
  }
  if (x) {
    rgbValue2.innerHTML = `${outcomeDiv2.style.backgroundColor} <br> <h1 class="text-center">  click to turn to HEX </h1>`;
  }
}

rgbValue.addEventListener("click", function () {
  if (colors.red <= 255 && colors.green <= 255 && colors.blue <= 255) {
    const hexColor = rgbToHex(colors.red, colors.green, colors.blue);
    rgbValue.innerHTML = hexColor;
  } else {
    rgbValue.innerHTML = `sorry,rgb values can only be up to 255`;
  }
});
rgbValue2.addEventListener("click", function () {
  if (colors2.red <= 255 && colors2.green <= 255 && colors2.blue <= 255) {
    console.log(colors2.red);
    const hexColor = rgbToHex(colors2.red, colors2.green, colors2.blue);
    rgbValue2.innerHTML = hexColor;
  } else {
    rgbValue2.innerHTML = `sorry,rgb values can only be up to 255`;
  }
});

function componentToHex(c) {
  if (c.toString().length === 3) {
    const hex = c.toString(16);
    console.log(c.toString());
    return hex.length == 1 ? "0" + hex : hex;
  }
  alert("you must enter 3 digits at the color values");
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
