//Define global variables

//Define global variables for high score
let viewHighScore = document.querySelector("#viewHighScore");
//Define global variable for initials and score submission button
let recordScore = document.querySelector("#recordScore");
//Define global variable for array that contains high score data
let highScoreArray = JSON.parse(localStorage.getItem("highScoreArray")) || [];
//Define global variable for start button
let sgButton = document.querySelector("#startGame");
//Define global variable for the question display
let questionText = document.querySelector(".questionText");
//Define global variable for the answer display
let answerText = document.querySelector(".answers");
//Define global variable for the message box
let messageBox = document.querySelector(".messageBox");
//Define global variable for timer display
let timerEL = document.querySelector(".time")
//Define global variable for time left and set starting time
let secondsLeft = 60;
let timerInterval;
//Define global variable for current score and set score to 0
let currentScore = 0;
//Define global variable for current question to index the question array
let currentQuestion = 0;

//Create questions in as objects in an array
let questions = [
    {
        question: "Which of the following is not a way of writing a function in JavaScript?",
        answers: ["Arrow Function", "Function Declaration", "Depressed Function", "Function Expression"],
        correct: "Depressed Function"
    },
    {
        question: "Which of the following is not a primitive data type used in javaScript?",
        answers: ["Arrays", "Number", "Sting", "Boolean"],
        correct: "Arrays"
    },
    {
        question: 'The following is an example of what data type? var = "1234"',
        answers: ["Boolean", "Falsy", "Number", "String"],
        correct: "String"
    },
    {
        question: 'Which of the following is not a type of JavaScript alert?',
        answers: ["Alert", "Prompt", "Confirm", "Warning"],
        correct: "Warning"
    },
    {
        question: 'What function does the "++" operator perform?',
        answers: ["Adds 2", "Adds 1", "Multiplies", "Nothing"],
        correct: "Adds 1"
    },
    {
        question: 'Which of the following is not a type of logical operator?',
        answers: ["&&", "||", "@", "!"],
        correct: "@"
    },
    {
        question: 'What does "null" mean?',
        answers: ["No one really knows, they just pretend to know", "The intentional absence of a value", "Undefined", "False"],
        correct: "The intentional absence of a value"
    },
    {
        question: 'A block of code designed to perform a particular task is called a(n) . . .',
        answers: ["Operator", "Function", "Boolean", "Object"],
        correct: "Function"
    },
    {
        question: 'Who created JavaScript?',
        answers: ["Brendan Eich", "Steve Wozniak", "Bill Gates", "Thomas Edison"],
        correct: "Brendan Eich"
    },
    {
        question: 'What is an array in JavaScript?',
        answers: ["A primitive data type that isn't used much", "How british people pronounce Harry", "A function frequently used in JavaScript", "A type of data that stores multiple values and elements in one variable"],
        correct: "A type of data that stores multiple values and elements in one variable"
    }
]

//Create function to start the game for event listener
function startGame() {
    //disable button after clicking
    document.querySelector("#startGame").disabled = true;
    //start timer
    runTimer();
    //Display question and answers
    displayQuestion();
}

function runTimer() {
    //display start time
    timerEL.textContent = secondsLeft + " Seconds";
    //Set timer interval to subtract 1 every interval
    timerInterval = setInterval(function () {
        //Display if timer is running
        if (secondsLeft > 0) {
            secondsLeft--;
            timerEL.textContent = secondsLeft + " Seconds";
        };
        //End game if timer reaches zero
        if (secondsLeft === 0) {
            gameOver();
        };
    }, 1000);
}

//Create function to display questions and answers
function displayQuestion() {
    //Define and isolate current question in the array of questions
    let question = questions[currentQuestion];
    //Clear question text area
    questionText.innerHTML = "";
    //Display current question
    questionText.textContent = question.question;
    //clear answer text area
    answerText.innerHTML = "";
    //Create and append li for each answer for current question
    question.answers.forEach(function (answer) {
        let answerItem = document.createElement("li");
        answerItem.textContent = answer;
        answerText.appendChild(answerItem);
        //check answer when li is clicked
        answerItem.addEventListener("click", checkAnswer);
    });
};
//Create function to check the clicked answer against the correct answer
function checkAnswer() {
    let question = questions[currentQuestion];
    let displayCurrentScore = document.querySelector(".displayCurrentScore");
    //if statement for correct answer
    if (this.textContent === question.correct) {
        //adds 1 to current score
        currentScore++;
        //Displays updated score
        displayCurrentScore.textContent = currentScore;
        //Change color for correct message
        messageBox.style.color = "rgb(0, 255, 47)";
        //Message for correct answer
        messageBox.textContent = "Correct!";
        //else statement for incorrect answer
    } else {
        //Assign time penalty for incorrect answer
        secondsLeft -= 5;
        //Change color for wrong answer
        messageBox.style.color = "rgb(255, 0, 0)";
        //Message for wrong answer
        messageBox.textContent = "Wrong!";
    }
    //Add 1 to current question to cycle to next question
    currentQuestion++;
    //If statement for if questions have all been asked and game is over
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        gameOver();
    }
}
//Create function to be called when the game is over
function gameOver() {
    clearInterval(timerInterval);
    //Define variable for initial and high score input
    let highScoreInput = document.getElementById("highScoreInput");
    //Set timer to zero
    secondsLeft = 0;
    //Style input form
    highScoreInput.style.display = "block";
    //Display message on timer
    timerEL.textContent = "Time's up!";
    //Set color for game over message
    messageBox.style.color = "var(--secondary-color)";
    //Set message for game over
    messageBox.textContent = "Game Over";
    //Set question and answer sections to display none and remove question
    questionText.style.display = "none";
    answerText.style.display = "none";
}
//Create function for saving the score when the submit button is clicked
function saveScore(event) {
    //prevent page from refreshing before saving data
    event.preventDefault();
    //Set variable for submitted initials
    let initialsInput = document.querySelector("#scoreInput");
    //Create object for the user score
    const userScore = {
        initials: initialsInput.value,
        score: currentScore
    }
    //add high score object to high score array
    highScoreArray.push(userScore)
    //Stringify array for local storage
    localStorage.setItem("highScoreArray", JSON.stringify(highScoreArray))
    //refresh window
    window.location.reload()
}

//create function to display high score when event listener is clicked
function displayHighScore() {
    //Create variable high score div
    const scoresContainer = document.getElementById('scores')
    //Toggle class "hide" on score container
    scoresContainer.classList.toggle('hide')
    //create variable for high score list
    const highScoresList = document.querySelector("#high-scores");
    //Clear high score list
    highScoresList.innerHTML = ''
    //Sort array from high score to low score
    highScoreArray.sort((a, b) => b.score - a.score);
    //Create li for each score in the array
    highScoreArray.forEach(function (score) {
        let listItem = document.createElement("li");
        listItem.textContent = score.initials + " : " + score.score;
        highScoresList.appendChild(listItem);
    });

}
//Start game when start game button is pushed
sgButton.addEventListener("click", startGame);
//Display high scores when "View High Scores" button is pushed
viewHighScore.addEventListener("click", displayHighScore);
//Submit score when "Record Score" button is clicked
recordScore.addEventListener("click", saveScore);