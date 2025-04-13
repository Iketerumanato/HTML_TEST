const text = document.getElementById("text");
const button = document.getElementById("colorButton");

button.addEventListener("click", () => {
  text.style.color = "blue"; // テキストの色を青に変える
});

// button.addEventListener("mouseenter", () => {
//     button.classList.add("sway");
//   });
  
//   button.addEventListener("mouseleave", () => {
//     button.classList.remove("sway");
//   });