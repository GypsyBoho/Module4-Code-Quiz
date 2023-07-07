// three phases 

// HTML Query Selectors //
// var startButtonEL = document.querySelector("#start")
//  var submitEl = document.querySelector('#initals-submit')
var startButton = document.querySelector("#start")
var startPage = document.querySelector("#start-page")
var questionsPage = document.querySelector("#questions-page")
var questionElement = document.getElementById("questions")
var timeEl = document.querySelector("#time")
var countdownEl = document.getElementById("countdown")

// Global variables //
// question number - current question
var currentQuestionIndex = 0;
var score = 0;

// store time - var timeLeft = 300
var timeLeft = 60;

var listOfHighScores = []
var timerInterval;


// this will show the last input in the form //
// renderLastregistered();

// to store more than one set of values in the local storage
// have an array
// make array a string - JASON.stringify()
// save to local storage
// to get the value back --
// get array from storage - JASON.parse()



// to keep the list of names and scores have an empty var that passes through the key and value pair for each name and score


// array/pool of questions - var currentQuestions = ["arry of questions",]
var questions = [
    {
        question: "What is the process by which plants convert light into energy?",
        choices: ["Photosynthesis", "Respiration", "Germination"],
        correctAnswers: "Photosynthesis"

    },
    {
        question: "What is the process by which plants convert light into energy?",
        choices: ["Photosynthesis", "Respiration", "Germination"],
        correctAnswers: "Photosynthesis"
    },
    {
        question: "What is the process by which plants convert light into energy?",
        choices: ["Photosynthesis", "Respiration", "Germination"],
        correctAnswers: "Photosynthesis"
    },
    {
        question: "What is the process by which plants convert light into energy?",
        choices: ["Photosynthesis", "Respiration", "Germination"],
        correctAnswers: "Photosynthesis"
    },
    {
        question: "What is the process by which plants convert light into energy?",
        choices: ["Photosynthesis", "Respiration", "Germination"],
        correctAnswers: "Photosynthesis"
    },
    {
        question: "What is the process by which plants convert light into energy?",
        choices: ["Photosynthesis", "Respiration", "Germination"],
        correctAnswers: "Photosynthesis"
    },
    {
        question: "What is the process by which plants convert light into energy?",
        choices: ["Photosynthesis", "Respiration", "Germination"],
        correctAnswers: "Photosynthesis"
    },
    

]
var currentQuestion = [
    "What is the process by which plants convert light into energy?",
    "Which of the following is not a type of plant tissue?",
    "Which plant hormone is responsible for promoting cell elongation and growth?",
    "Which part of the plant is responsible for absorbing water and minerals from the soil?",
    "What is the outermost layer of a leaf called?",
    "Which of the following is a carnivorous plant?",
    "What is the process of pollen transfer from the anther to the stigma called?"
]
// arry of answers - varAnswers = ["[4", "5", "6", "7"], ["9", "8", "7", "16"], ["11", "12", "16", "17"], ["24", "25", "26", "27"]]
var answers = [
    ['a) Photosynthesis', 'b) Respiration', 'c) Germination'],
    ['a) Epidermis', 'b) Xylem', 'c) Mitochondria'],
    ['a) Gibberellins', 'b) Ethylene', 'c) Abscisic acid'],
    ['a) Roots', 'b) Leaves', 'c) Flowers'],
    ['a) Cuticle', 'b) Epidermis', 'c) Mesophyll'],
    ['a) Venus flytrap', 'b) Sunflower', 'c) Cactus'],
    ['a) Pollination', 'b) Fertilization', 'c) Germination']
];

// Store correct answers in a new array var correctAnswers = ["4", "8"]
var correctAnswers = [
    "a) Photosynthesis",
    "c) Mitochondria",
    "a) Gibberellins",
    "a) Roots",
    "b) Epidermi",
    "a) Venus flytrap",
    "a) Pollination"

]

// functions

function startGame() {
    startPage.classList.add("hide");
    questionsPage.classList.remove("hide");
    setTime();
    // initalize the game 
    // - start button hides
    // - welcome text disapear 
    // - time appears/starts
    // - text for first question appears
    // - options for question shows
}

function setTime() {
    timerInterval = setInterval(function () {
        if (timeLeft <= 0) {
            endGame()
        }
        timeLeft--;
        timeEl.textContent = timeLeft;

    }, 1000);
}




// creat function to stop the game
function endGame() {
    clearInterval(timerInterval){
        // switch to finish page
    }
}

// when the submit button is clicked to submit the final score and initals // 
startButton.addEventListener("click", startGame)


// function timer() {
    // set internal interval - look through activites
    // decrement time by time left each second
    // check if the time is zero === endGame
    //
// }

// function userGuess() {
// // triggered by event listener on the options
// // figure out what they clicked -- event.target
// // based on what they selected is it right? 
// // if they got the correct answer -  show message "Correct"
// // else - message that says incorrect, reduce the time by 10 seconds
// // call quizQuestion function - renews the question on the page

// }

// function quizQuestion() {
//     // show question
//     // show response
//     // increase(increment) current queston ++i
//     // if you get to the end of the array - endGame function
// }

// function endGame(){
// // everything dissapears - questions, answers
// // summary elements show - COngrats, display the score
// // input field that asks for initials - triggers eventListner by user submittions
// // stop decrementing the time left
// }

// function afterSubmit() {
//     // create score object
//     // initalField.value for the initals value in the score object
//     // insert new high score into localStorage (array of objects) [{initals: "SSL", score:23}, {initals:"initalField.value": score:31}]
//         // check existing value (read)
//         // update the scores (update)
//         // save/overwirte
//         // create an edge case check - empty array of scores
//     // show high scores + new score 
//     // option to start over and clear high score
// }