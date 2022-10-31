const form = document.getElementById("form");
const submit = document.getElementById("submit");
const inputNumber = document.getElementById("inputNumber");
const answer = document.getElementById("answer");
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

form.addEventListener("click", (e) => {
  e.preventDefault();
});

submit.addEventListener("click", () => {
  let a = "";
  a += inputNumber.value;
  let b = eval(a - 1);
  if (b > 26) {
//   if (b > alphabet.length) {
    console.log("no");
    inputNumber.value = "";
  } else {
    answer.innerHTML += alphabet[b];
  }
});
