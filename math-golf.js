////Game Engine

let current_num = 3;
let target_num = 27;
let steps_used = 0;

function calcCurrentNum(buttonValue) {
  current_num += buttonValue;
  steps_used += 1;

  document.getElementById("target_num").innerText = target_num;
  document.getElementById("current_num").innerText = current_num;
  document.getElementById("num_steps").innerText = steps_used;

  if (current_num === target_num) {
    setTimeout(() => {
      alert(
        "Congratulations!  You solved it in " +
          steps_used +
          "steps.  Great job."
      );
    }, 10);
  }
}
