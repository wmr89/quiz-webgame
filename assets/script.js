let sgButton = document.getElementById("#startGame");
//let questionText = $("#question");
//let answerText = $("#answers");
//let answer0text = $("#answer0");
//let answer1text = $("#answer1");
//let answer2text = $("#answer2");
//let answer3text = $("#answer3");
//let messageBox = $("#messageBox");

sgButton.addEventListener("dblclick", runTimer());

let timerEL = document.getElementById(".timer")
let secondsLeft = 121;

function runTimer() {
    var timerInterval = setInterval(function() {
        if (secondsLeft > 0) {
        secondsLeft--;
        timerEL.text(secondsLeft +" Seconds");
        }

        if(secondsLeft === 0) {
             clearInterval(timerInterval);
             messageBox.text("Game Over");
        }
    }, 1000);
}


//function displayQuestion() {
//    let question = questions[currentQuestion];

//}












//let q1 = {
//   question: "What is not a way of writinga function in JavaScript?",
//    answers: [ "Arrow Function", "Function Declaration", "Depressed Function", "Arrow Function"],
    correct: 2
//}

//let questions = [q1,cd ]




