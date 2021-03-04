const boxes = Array.from(document.querySelectorAll(".inbox .item input"));

let firstClick;
let secondClick;

const handleCheck = (check) => {
  check.type === "keydown" && firstClick
    ? (secondClick = boxes.indexOf(check.target))
    : (firstClick = boxes.indexOf(check.target));

  if (firstClick && secondClick) {
    for (let i = firstClick; i <= secondClick; i++) {
      boxes[i].checked = true;
    }
  }
};
boxes.forEach((checkbox) => checkbox.addEventListener("click", handleCheck));

window.addEventListener("keydown", (e) => e.key === "Shift" && handleCheck(e));
