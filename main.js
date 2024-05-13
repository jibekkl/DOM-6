const board = document.querySelector("#board");

const on = document.querySelector(".on");

const off = document.querySelector(".off");

const colorsNames = [
  "Black",
  "White",
  "Red",
  "Green",
  "Blue",
  "Yellow",
  "Orange",
  "Purple",
  "Pink",
  "Cyan",
  "Brown",
  "Gray",
  "Turquoise",
  "Lime",
  "Lavender",
  "Raspberry",
  "Indigo",
  "Mint",
  "Sandy",
  "Chocolate",
  "Plum",
  "Lilac",
  "Mint",
  "Marsala",
  "Burgundy",
  "Beige",
  "Olive",
  "Bright Red",
  "Bright Green",
  "Bright Blue",
  "Bright Yellow",
  "Bright Orange",
  "Bright Purple",
  "Bright Pink",
  "Bright Cyan",
  "Bright Brown",
  "Bright Gray",
  "Bright Turquoise",
  "Bright Lavender",
  "Bright Raspberry",
  "Bright Indigo",
  "Bright Mint",
  "Bright Sandy",
  "Bright Chocolate",
  "Bright Plum",
  "Bright Lilac",
  "Bright Mint",
  "Bright Marsala",
  "Bright Burgundy",
  "Bright Beige",
  "Bright Olive",
  "Dark Red",
  "Dark Green",
  "Dark Blue",
  "Dark Yellow",
  "Dark Orange",
  "Dark Purple",
  "Dark Pink",
  "Dark Cyan",
  "Dark Brown",
  "Dark Gray",
  "Dark Turquoise",
  "Dark Lavender",
  "Dark Raspberry",
  "Dark Indigo",
  "Dark Mint",
  "Dark Sandy",
  "Dark Chocolate",
  "Dark Plum",
  "Dark Lilac",
  "Dark Mint",
  "Dark Marsala",
  "Dark Burgundy",
  "Dark Beige",
  "Dark Olive",
];

for (let i = 0; i <= 303; i++) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");
  board.append(box);
  box.addEventListener("mouseover", () => setBackground(box));
  box.addEventListener("mouseout", () => removeBackground(box));
  on.addEventListener("click", () => setBackground(box));
  off.addEventListener("click", () =>
  
//   removeBackground(box)
   { box.style.background = " #777474";}
  );
}

function randomColor() {
  let i = Math.floor(Math.random() * colorsNames.length);
  return colorsNames[i];
}

randomColor();
function setBackground(el) {
  let color = randomColor();
  el.style.background = color;
  el.style.boxShadow = `0 0 20px ${color} `;
}

function removeBackground(el) {
  el.style.background = " #777474";
  el.style.boxShadow = "none";
}
