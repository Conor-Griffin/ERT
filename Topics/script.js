
function checkAnswers() {

  let score = 0;

  let answers=document.querySelectorAll('input[type="radio"]:checked');

  answers.forEach(function(answer) {
    if (answer.value === "1") {
      score++;
    }
  });
  document.getElementById("result").innerText =
    "You scored " + score + " out of 10!";
}
