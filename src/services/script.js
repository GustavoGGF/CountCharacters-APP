const span = document.querySelector("span");
const board = document.querySelector(".board");

board.addEventListener("keyup", () => {
  const boardValue = board.value;

  span.innerText = boardValue.length;
});
