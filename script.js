var headerEl = document.getElementById("header");
var highScoresEl = document.getElementById("highScoresDiv");
var h1El = document.getElementById("h1");
var h3El = document.getElementById("h3");
var buttonEl = document.getElementById("startButton");
var secondsLeftEl = document.getElementById("secondsLeftDiv");

var secondsLeft = 300;

var questionArr = [
    {
        question1: "What does DOM stand for?",
        answers1: ["document object model", "donuts over money", "decorating old mugs", "don't objectify me"],
        correct1: "document object model"
    },
    {
        question2: "What is one of the three pop-up boxes we've learned about thus far?",
        answers2: ["pop-up", "cancel", "confirm", "deny"],
        correct2: "confirm"
    },
    {
        question3: "How do you define a variable?",
        answers3: ["use the dictionary", "var variableName =", "let variableName", "var var ="],
        correct3: "var variableName ="
    },
    {
        question4: "Where can you link to your script?",
        answers4: ["the arms", "the feet", "the stomach", "the head"],
        correct4: "the head"
    },
    {
        question5: "How many different data types a variable can hold?",
        answers5: ["2", "3", "4", "5"],
        correct5: "5"
        //string, number, boolean, array, object
    }
    ];

buttonEl.textContent = ("Start");
h1El.textContent = ("Welcome to this Code Quiz");
highScoresEl.textContent = ("View High Scores");
secondsLeftDiv.textContent = ("Seconds left: " + secondsLeft);


buttonEl.addEventListener("click", secsLeft)

function secsLeft(){
    var countdown = setInterval(function(){
        secondsLeft--;
        secondsLeftDiv.textContent = ("Seconds left: " + secondsLeft)
        if (secondsLeft <= 0){
            clearInterval(countdown);
            secondsLeftEl.textContent="times up"
            h3El.innerHTML= "";
        }
        else {
            h3El.textContent = (questionArr[0]);
            buttonEl.style.display = "none";
        }
    }, 300);
};



// when I click the start button
// then a timer starts and I am presented with a question
// when I answer a question 
// then I am presented with another question
// when I answer a question incorrectly 
// then time is subtracted from the clock
// when all questions are answered or the timer reaches 0
// then the game is over
// when the game is over
// then I can save my initials and score 

