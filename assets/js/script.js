// Questionss variable to store array of questions
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      answers: ["strings", "booleans", "alerts", "numbers"],
      correctAnswer: "alerts"
    },
    {
      question: "The condition in an if/else statement is enclosed within __.",
      answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
      correctAnswer: "parentheses"
    },
    {
      question: "Arrays in JavaScript can be used to store __.",
      answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
      correctAnswer: "all of the above"
    },
    {
      question: "String values must be enclosed within __ when being assigned to variables.",
      answers: ["commas", "curly brackets", "quotes", "parentheses"],
      correctAnswer: "quotes"
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
      answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
      correctAnswer: "console.log"
    },
  ];

// DOM elements to get Element content from html
var startButton = document.getElementById("start-button");
var startContainer = document.getElementById("start-container");
var questionContainer = document.getElementById("quiz-question");
var questionText = document.getElementById("question-text");
var answerButtons = document.getElementsByClassName("answer-button");
var timerElement = document.getElementById("timer");
var timerContainer = document.getElementById("timer-container");
var gameOverContainer = document.getElementById("game-over-container");
var initialsInput = document.getElementById("initials-input");
var submitButton = document.getElementById("submit-button");
var highScoresList = document.getElementById("high-scores-list");
var viewScoresLink = document.getElementById("view-scores-link");
var highScoresContainer = document.getElementById("high-scores-container");

// Variables needed to store quiz data
var timeLeft;
var score;
var currentQuestionIndex = 0;
var timerInterval;
var highScores = [];

// Event listeners
startButton.addEventListener("click", startQuiz);
viewScoresLink.addEventListener("click", showHighScores);
for (var i = 0; i < answerButtons.length; i++) {
  answerButtons[i].addEventListener("click", selectAnswer);
}
submitButton.addEventListener("click", saveScore);

// Quiz functions
function startQuiz() {
  startContainer.style.display = "none";
  questionContainer.style.display = "block";
  timerContainer.style.display = "block";
  timeLeft = 60;
  score = 0;
  currentQuestionIndex = 0;
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = currentQuestion.answers[i];
  }
}

function selectAnswer() {
  var selectedAnswer = this.textContent;
  var currentQuestion = questions[currentQuestionIndex];
  
  var feedback = document.createElement("div");
  feedback.classList.add("feedback-container");

  var feedbackText = document.createElement("p");
  feedback.appendChild(feedbackText);
  
  if (selectedAnswer === currentQuestion.correctAnswer) {
    score++;
    feedbackText.textContent = "Correct!";
    feedbackText.classList.add("correct");
  } else {
    timeLeft -= 10;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
    feedbackText.textContent = "Wrong!";
    feedbackText.classList.add("wrong");
  }

  currentQuestionIndex++;

  if (currentQuestionIndex === questions.length || timeLeft === 0) {
    endQuiz();
  } else {
    displayQuestion();
  }

  var answersContainer = document.getElementById("answers-container");
  answersContainer.appendChild(feedback);
  
  setTimeout(function () {
    answersContainer.removeChild(feedback);
  }, 1000);

}
  
function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
      if (timeLeft <= 0) {
        endQuiz();
      }
      timerElement.textContent = timeLeft;
    }, 1000);
  }
  
function endQuiz() {
    clearInterval(timerInterval);
    questionContainer.style.display = "none";
    timerContainer.style.display = "none";
    gameOverContainer.style.display = "block";
  }
  
function saveScore() {
    var initials = initialsInput.value;
    if (initials) {
      var scoreEntry = { initials: initials, score: score };
      highScores.push(scoreEntry);
      highScores.sort(function(a, b) {
        return b.score - a.score;
      });
      displayHighScores();
      showHighScores();
    }
  }
  
function displayHighScores() {
    highScoresList.innerHTML = "";
    for (var i = 0; i < highScores.length; i++) {
      var scoreEntry = highScores[i];
      var li = document.createElement("li");
      li.textContent = scoreEntry.initials + " - " + scoreEntry.score;
      highScoresList.appendChild(li);
    }
  }
  
function showHighScores() {
    startContainer.style.display = "none";
    questionContainer.style.display = "none";
    timerContainer.style.display = "none";
    gameOverContainer.style.display = "none";
    highScoresContainer.style.display = "block";
  }