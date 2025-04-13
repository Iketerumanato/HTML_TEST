const button = document.getElementById("myButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "ボタンがクリックされました！";
  message.style.color = "red";  // テキストの色を変える
});