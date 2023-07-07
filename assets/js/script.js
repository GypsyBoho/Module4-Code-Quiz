// three phases 

// HTML Query Selectors //
// var startButtonEL = document.querySelector("#start")
//  var submitEl = document.querySelector('#initals-submit')
var startButton = document.querySelector("#start")
var startPage = document.querySelector("#start-page")
var questionsPage = document.querySelector("#questions-page")
var finishPage = document.querySelector("#finsh-page")
var questionElement = document.getElementById("questions")
var timeEl = document.querySelector("#time")
var countdownEl = document.getElementById("countdown")
var choicesEl = document.getElementById("choices")
var choice1 = document.getElementById("choice1")
var choice2 = document.getElementById("choice2")
var choice3 = document.getElementById("choice3")

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
// make array a string - JSON.stringify()
// save to local storage
// to get the value back --
// get array from storage - JSON.parse()



// to keep the list of names and scores have an empty var that passes through the key and value pair for each name and score


// I combined all of the arrays for question, choices and answers into one variable

var questions = [
    {
        question: "What is the process by which plants convert light into energy?",
        choices: ["Photosynthesis", "Respiration", "Germination"],
        correctAnswers: "Photosynthesis"

    },
    {
        question: "Which of the following is not a type of plant tissue?",
        choices: ["Epidermis'", "Xylem", "Mitochondria"],
        correctAnswers: "Mitochondria"
    },
    {
        question: "Which plant hormone is responsible for promoting cell elongation and growth?",
        choices: ["Gibberellins", "Ethylene", "Abscisic acid"],
        correctAnswers: "Gibberellins"
    },
    {
        question: "Which part of the plant is responsible for absorbing water and minerals from the soil?",
        choices: ["Roots", "Leaves", "Flowers"],
        correctAnswers: "Roots"
    },
    {
        question: "What is the outermost layer of a leaf called?",
        choices: ["Cuticle", "Epidermis", "Mesophyll"],
        correctAnswers: "Epidermis"
    },
    {
        question: "Which of the following is a carnivorous plant?",
        choices: ["Venus flytrap", "Sunflower", "Cactus"],
        correctAnswers: "Venus flytrap"
    },
    {
        question: "What is the process of pollen transfer from the anther to the stigma called?",
        choices: ["Pollination", "Fertilization", "Germination"],
        correctAnswers: "Pollination"
    },
    
]
// functions

function startGame() {
    startPage.classList.add("hide");
    questionsPage.classList.remove("hide");
    setTime();
    questionElement.textContent = questions[0].question;
    choicesEl.textContent = questions[0].choices
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

function optionClicked() {
 if(currentQuestionIndex === questions.length){
   endGame();
 }  
 else { 
    currentQuestionIndex++ 
    
 }
}



// creat function to stop the game
function endGame() {
    clearInterval(timerInterval);
    questionsPage.classList.add("hide");
    finishPage.classList.remove("hide");
}
// if the user reaches the end of the question it calls end game function



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