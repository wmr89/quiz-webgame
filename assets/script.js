let sgButton = document.querySelector("#startGame");
let questionText = document.querySelector(".questionText");
let answerText = document.querySelector(".answers");
let answer0text = document.getElementById("#answer0");
let answer1text = document.getElementById("#answer1");
let answer2text = document.getElementById("#answer2");
let answer3text = document.getElementById("#answer3");
let messageBox = document.querySelector(".messageBox");

//sgButton.addEventListener("click", runTimer());

let timerEL = document.querySelector(".time")
let secondsLeft = 120;

function runTimer(event) {
    var timerInterval = setInterval(function () {
        if (secondsLeft > 0) {
            secondsLeft--;
            timerEL.textContent = secondsLeft + " Seconds";
        }

        console.log(secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            messageBox.textContent = "Game Over";
        }
    }, 1000);
}
//runTimer()

//let q1 = {
//    question: "What is not a way of writinga function in JavaScript?",
//     answers: [ "Arrow Function", "Function Declaration", "Depressed Function", "Arrow Function"],
//     correct: 2
// }

let questions = [
    {
        question: "What is not a way of writing a function in JavaScript?",
        answers: ["Arrow Function", "Function Declaration", "Depressed Function", "Arrow Function"],
        correct: 2
    }
]

let currentQuestion = 0;
displayQuestion();

function displayQuestion() {

    let question = questions[currentQuestion];

    console.log(question);

    questionText.textContent = question.question;

    answerText.innerHTML = "";
    
    console.log(question.answers);

    question.answers.forEach((answer, index) => {

        let answerItem = document.createElement("li");

        answerText.textContent = answer;

        answerItem.addEventListener("click", () => checkAnswer(index))

    });
}
currentScore = 0;

function checkAnswer(selectedIndex) {
    let question = questions[currentQuestion];
    if (selectedIndex === question.correct) {
        currentScore++;
        console.log(currentScore)
    }
}


















