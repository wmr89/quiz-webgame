let sgButton = document.querySelector("#startGame");
let questionText = document.querySelector(".questionText");
let answerText = document.querySelector(".answers");
let messageBox = document.querySelector(".messageBox");
let displayCurrentScore = document.querySelector(".displayCurrentScore")

sgButton.addEventListener("click", startGame);

let timerEL = document.querySelector(".time")

let secondsLeft = 121;

function startGame() {
    runTimer();
    displayQuestion();
}

function runTimer(event) {
    var timerInterval = setInterval(function () {
        //while?
       // document.querySelector("#startgame").disabled = 'true';
        if (secondsLeft > 0) {
            secondsLeft--;
            timerEL.textContent = secondsLeft + " Seconds";
            document.querySelector("#startgame").disabled = 'true';
        };

        //console.log(secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timerEL.textContent = "Time's up!"
            messageBox.textContent = "Game Over";
            questionText.style.display = "none";
            answerText.style.display = "none";
        };

    }, 1000);
}

let questions = [
    {
        question: "Which ofthe following is not a way of writing a function in JavaScript?",
        answers: ["Arrow Function", "Function Declaration", "Depressed Function", "Arrow Function"],
        correct: 2
    },
    {
        question: "What are the primative data types used in javaScript?",
        answers: [ "Undefined, string, number, and boolean", "Arrays and Objects", "Iterations, for loops, and Functions", "Spreadsheets, tables, and pie charts" ],
        correct: 0
    },
    {
        question: 'The following is an example of what data type? var = "1234"',
        answers: ["Boolean", "Falsy", "Number", "String"],
        correct: 3
    },
    {
        question: 'Which of the following is not a type of JavaScript alert?',
        answers: ["Alert", "Prompt", "Confirm", "Warning"],
        correct: 3
    },
    {
        question: 'What function does the "++" operator perform?',
        answers: ["Adds 2", "Adds 1", "Multipies", "Nothing"],
        correct: 1
    },
    {
        question: 'Which of the following is not a type of logical operator?',
        answers: ["&&", "||", "@", "!"],
        correct: 2
    },
    {
        question: 'What does "null" mean?',
        answers: ["No one really knows, they just pretend to know", "The intentional absence of a value", "Undefined", "False"],
        correct: 1
    },

]

let currentQuestion = 0;

function displayQuestion() {

    let question = questions[currentQuestion];

    console.log(question);

    questionText.textContent = question.question;
    //Why do I need this section
    answerText.innerHTML = "";

    question.answers.forEach(function (answer, index) {
        let answerItem = document.createElement("li");
        answerItem.textContent = answer;
        answerItem.addEventListener("click", function () {
            checkAnswer(index)
        });
        answerText.appendChild(answerItem);
    });

};

currentScore = 0;

function checkAnswer(selectedIndex) {
    
    let question = questions[currentQuestion];
    
    if (selectedIndex === question.correct) {
        currentScore ++;
        displayCurrentScore.textContent = currentScore;
        console.log(currentScore)
        messageBox.textContent = "Correct!";
    } else {
        secondsLeft -= 5;
        messageBox.textContent = "Wrong!";
    }

    currentQuestion++;

    console.log(currentQuestion);
    console.log(questions.length)

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
    gameOver();
    }
}

function gameOver() {
    secondsLeft = 0;

}



















//add code for dark mode toggle switch
let toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'root');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
















