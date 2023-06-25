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
var saveButton = document.getElementById("save-button");
var highScoresList = document.getElementById("high-scores-list");
var viewScoresLink = document.getElementById("view-scores-link");
var highScoresContainer = document.getElementById("high-scores-container");

// Variables needed to store quiz data
var timeLeft;
var score;
var currentQuestionIndex = 0;
var timerInterval;
var highScores = [];
  