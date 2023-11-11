let sgButton = document.querySelector("#startGame");
let questionText = document.querySelector(".questionText");
let answerText = document.querySelector(".answers");
let messageBox = document.querySelector(".messageBox");
let displayCurrentScore = document.querySelector(".displayCurrentScore");
let highScoreInput = document.getElementById("highScoreInput");

sgButton.addEventListener("click", startGame);

let timerEL = document.querySelector(".time")

let secondsLeft = 61;

function startGame() {
    runTimer();
    displayQuestion();
}

function runTimer(event) {
    var timerInterval = setInterval(function () {
        //while?
        // document.querySelector("#startGame").disabled = 'true';
        if (secondsLeft > 0) {
            secondsLeft--;
            timerEL.textContent = secondsLeft + " Seconds";
            document.querySelector("#startGame").disabled = 'true';
        };

        //console.log(secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timerEL.textContent = "Time's up!"
            messageBox.textContent = "Game Over";
            questionText.style.display = "none";
            answerText.style.display = "none";
            highScoreInput.style.display = "block";
        };

    }, 1000);
}

let questions = [
    {
        question: "Which of the following is not a way of writing a function in JavaScript?",
        answers: ["Arrow Function", "Function Declaration", "Depressed Function", "Arrow Function"],
        correct: 2
    },
    {
        question: "Which of the following is not a primitive data type used in javaScript?",
        answers: ["Arrays", "Number", "Sting", "Boolean"],
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
        answers: ["Adds 2", "Adds 1", "Multiplies", "Nothing"],
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
    {
        question: 'A block of code designed to perform a particular task is called a(n) . . .',
        answers: ["Operator", "Function", "Boolean", "Object"],
        correct: 1
    },
    {
        question: 'Who created JavaScript?',
        answers: ["Brendan Eich", "Steve Wozniak", "Bill Gates", "Thomas Edison"],
        correct: 0
    },
    {
        question: 'What is an array in JavaScript?',
        answers: ["A primitive data type that isn't used much", "How british people pronounce Harry", "A function frequently used in JavaScript", "A type of data that stores multiple values and elements in one variable"],
        correct: 3
    }
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
        currentScore++;
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
    let scoreInput = document.getElementById("scoreInput");
    highScoreInput.style.display = "block";
    checkHighScore(account.store);

    //add option to store high score
    //reset game

}



















//add view high scores
let highScoresList = document.querySelector("#high-scores");

let initials = document.getElementById("#student-names");

let viewHighScore = document.querySelector("#viewHighScore");
let highScores = document.querySelector(".high-scores")

viewHighScore.addEventListener("click", function () {
    if(highScores.style.display === "none")  {  
    highScores.style.display = "inline-block"; 
    } else {
        highScores.style.display = "none";  
    }
    console.log(highScores.style.display);
})



















// let NO_OF_HIGH_SCORES = 10;
// let HIGH_SCORES = 'highScores';
// let highScoreString = localStorage.getItem(HIGH_SCORES);
// //nullish coalescing operator, returns
// let highScores = JSON.parse(highScoreString) ?? [];

// let lowestScore = highScores[NO_OF_HIGH_SCORES-1]?.score ?? 0;

// function checkHighScore(currentScore) {
//     let highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
//     let lowestScore = highScores[NO_OF_HIGH_SCORES-1]?.score ?? 0;

//     if (currentScore > lowestScore) {
//         saveHighScore(currentScore, highScores);
//         showHighScores();
//     }
// }

// const newScore = {currentScore, initials };

// function saveHighScore(currentScore, highScores) {
//     const newScore = { currentScore, initials };
    
//     // 1. Add to list
//     highScores.push(newScore);
  
//     // 2. Sort the list
//     highScores.sort((a, b) => b.score - a.score);
    
//     // 3. Select new list
//     highScores.splice(NO_OF_HIGH_SCORES);
    
//     // 4. Save to local storage
//     localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
//   };

//   highScores.map((score) => `<li>${score.score} — ${score.name}`);

//   const highScoreList = document.getElementById(HIGH_SCORES);

// highScoreList.innerHTML = highScores.map((score) => 
//   `<li>${score.score} - ${score.name}`
// );

// function showHighScores() {
//     const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ?? [];
//     const highScoreList = document.getElementById(HIGH_SCORES);
    
//     highScoreList.innerHTML = highScores
//       .map((score) => `<li>${score.score} - ${score.name}`)
//       .join('');
//   }






















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

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light'); //add this
    }
}
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}















