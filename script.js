

// displayNext();


var questions = [{
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "He too makes lamb", "Hey that's my lamp!", "Hiccums Text Madeup Laserations"],
        correctAnswer: 0
    },
    {
        question: "What does CSS stand for?",
        answers: ["Cats simply suck", "Christian Slater Stomp!", "Cascade Styling Sheet", "Caligraphy Selected Styles"],
        correctAnswer: 2
    },

    {

        question: "Where do we link the script tag on our HTML page?",
        answers: ["At the top", "At the bottom", "You don't need to link it", "What is a script tag?"],
        correctAnswer: 1

    },
    {

        question: "What does CDN stand for?",
        answers: ["Content Doesn't Navigate","Charles Dechamp Network", "Cats Still Suck", "Content Delivery Network"],
        correctAnswer: 3

    },
    {

        question: "Which js syntax will print 'Hello World' to the console?",
        answers: ["document.getElement('p').splice('')=Hello World", "Console.log('Hello World')", "$document.printInnerHTML='Hello World'", "FREAKING PRINT HELLO WORLD!"],
        correctAnswer: 1
    },
    {

        question: "What symbol do we use to reference an ID in js and CSS?",
        answers: ["#idName", "@idName", "$idName", "!idName"],
        correctAnswer: 0

    },
    {

        question: "What is the best browser?",
        answers: ["...Internet Explorer", "Safari", "Google Chrome", "Firefox"],
        correctAnswer: 2

    }
];


//Declaring my variables for the quiz
var startBtn = document.querySelector('#start-btn');
var timeLeft = document.querySelector("#currentTime");
var questionDiv = document.querySelector("#questionDiv");
var wrapper = document.querySelector("#wrapper");

//declared variables of question counter and overall quiz scoring
var questionIndex = 0;
var answerSelect = [];
var quizScore = 0;

//declaring user time at 60 seconds, and wrong answers penalty of 10 seconds
var timeRemaining = 60;
var wrong = 10;
//setting my interval to 0 seconds
var interval = 0;
//creating the ul element that will hold the questions
var ulCreate = document.createElement("ul");


// timeLeft.addEventListener("click", function() {

// };


function showQuestion(questionIndex) {
    questionDiv.innerHTML="";
    ulCreate.innerHTML="";


    for (var i = 0; questions.length; i++) {
        var userQuestion = questions[questionIndex].question;
        var userAnswers = answers[questionIndex].answers;
        questionDiv.textContent = userQuestion;
    }

    userAnswers.forEach(function(newEl) {
        var showQuestion = document.createElement("li");
        showQuestion.textContent = newEl;
        questionDiv.appendChild(ulCreate);
        ulCreate.appendChild(showQuestion);
        showQuestion.addEventListener("click", (tracking));
    })
}

function tracking(event) {
    var choice = event.target;

    if (element.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "newDiv");

        if (element.value === questions[questionIndex].correctAnswer) {
            quizScore++;
            createDiv.textContent = "Correct!"
        } else {
            timeRemaining = timeRemaining - wrong;
            createDiv.textContent = "Wrong! -10 seconds"
        }
    }

    questionIndex++;

    if(questionIndex > questions.length) {
        fin();
        createDiv.textContent = "The quiz has ended, well done!";
    } else {
        render(questionIndex);
    }
    questionDiv.appendChild(createDiv);
}


showFinalScore();

function displayScore(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
    var email = localStorage.getItem("email");
    var password = localStorage.getItem("password");
  
    if (email && password === null) {
      return;
    }
  
    userEmailSpan.textContent = email;
    userPasswordSpan.textContent = password;
}
  
submitBtn.addEventListener("click", function(event) {
    event.preventDefault();
  
    var username = document.querySelector("#username").value;
    var finalScore = document.querySelector("#score").value;
  
    if (email === "") {
      displayMessage("error", "Username cannot be blank");
    } else {
      displayMessage("success", "Score Saved Successfully");
  
      localStorage.setItem("username", username);
      localStorage.setItem("finalScore", finalScore);
      renderLastRegistered();
    }
});






// if (answer === null) {
//     alert("You must make a selection!");
// }

// function createQuestion() {
//     var container = document.createElement('div');
//     var heading = document.createElement('h2')
//     var element = document.createElement('ol');
// }



// on click, start Game

// function show clock, show first question
// once answered, determine whether or not it is correct,
// if incorrect, subtract 10 seconds
// else - nothing
// student clicks on next button to go to next question, 
// create new HTML elements to add in next questions and answers,
// once quiz is finished, show final score and show text box to add a name and their score
// save info onto their own network
// if timer runs out before quiz is finished, jump to finished screen and display score

