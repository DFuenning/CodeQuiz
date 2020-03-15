
var questions = [
    {
        exam: "What does HTML stand for?",
        answers: ["Hyper Text Markup Language", "He too makes lamb", "Hey that's my lamp!", "Hiccums Text Madeup Laserations"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        exam: "What does CSS stand for?",
        answers: ["Cats simply suck", "Christian Slater Stomp!", "Cascade Styling Sheet", "Caligraphy Selected Styles"],
        correctAnswer: "Cascade Styling Sheet"
    },

    {

        exam: "Where do we link the script tag on our HTML page?",
        answers: ["At the top", "At the bottom", "You don't need to link it", "What is a script tag?"],
        correctAnswer: "At the bottom"

    },
    {

        exam: "What does CDN stand for?",
        answers: ["Content Doesn't Navigate", "Charles Dechamp Network", "Cats Still Suck", "Content Delivery Network"],
        correctAnswer: "Content Delivery Network"

    },
    {

        exam: "Which js syntax will print 'Hello World' to the console?",
        answers: ["$('p').splice('')=Hello World", "Console.log('Hello World')", "$document.printInnerHTML='Hello World'", "FREAKING PRINT HELLO WORLD!"],
        correctAnswer: "Console.log('Hello World')"
    },
    {

        exam: "What symbol do we use to reference an ID in js and CSS?",
        answers: ["#idName", "@idName", "$idName", "!idName"],
        correctAnswer: "#idName"

    },
    {

        exam: "What is the best browser?",
        answers: ["...Internet Explorer", "Safari", "Google Chrome", "Firefox"],
        correctAnswer: "Google Chrome"

    }
];


//declared variables of question counter and overall quiz scoring
var quizScore = 0;
var questionIndex = 0;

//Declaring my variables for the quiz
var startBtn = document.querySelector('#start-btn');
var questionDiv = document.querySelector("#questionsDiv");
var wrapper = document.querySelector("#wrapper");
var currentTime = document.querySelector("#currentTime");

//declaring user time at 60 seconds, and wrong answers penalty of 10 seconds
var timeRemaining = 60;
var wrong = 10;
//setting my interval to 0 seconds
var interval = 0;
//creating the ul element that will hold the questions
var ulCreate = document.createElement("ul");

//triggers the beginning of quiz, sets the timer to beginning
startBtn.addEventListener("click", function () {
    if (interval === 0) {
        interval = setInterval(function () {
            timeRemaining--;
            currentTime.textContent = "Time: " + timeRemaining;

            if (timeRemaining <= 0) {
                clearInterval(interval);
                fin();
                // currentTime.innerHTML = "";
                currentTime.textContent = "PUT DOWN YOUR MICE!"
                
            }
        }, 1000);
    }
    showQuestion(questionIndex);
    


})

// displays all of the questions and answer choices
function showQuestion(questionIndex) {
    //clearing out all content from page before rendering
    questionDiv.innerHTML = "";
    ulCreate.innerHTML = "";
//loops through each question in array above
    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].exam;
        var userAnswers = questions[questionIndex].answers;
        questionDiv.textContent = userQuestion;
    }
//creating a new li for each new set of choices
    userAnswers.forEach(function (newEl) {
        var showAnswers = document.createElement("li");
        showAnswers.textContent = newEl;
        questionDiv.appendChild(ulCreate);
        ulCreate.appendChild(showAnswers);
        showAnswers.addEventListener("click", (tracking));
    })
}
//function created for comparing the results between correct and wrong
function tracking(event) {
    var choice = event.target;

    if (choice.matches("li")) {
        
        var newDiv = document.createElement("div");
        newDiv.setAttribute("id", "newDiv");
//if the questions are correct, quizscore is incremented by 1 and displays "Correct" in box below choices
        if (choice.textContent === questions[questionIndex].correctAnswer) {
            quizScore++;
            newDiv.textContent = "Correct!"
        } else {
            // if the answer is wrong, 10 seconds are subtracted from the quiz
            timeRemaining = timeRemaining - wrong;
            newDiv.textContent = "Wrong! -10 seconds"
        }
    }
//incrementing the question index counter by 1 with each choice
    questionIndex++;

    if (questionIndex >= questions.length) {
        fin();
        //when the questions are complete, 'fin();' is run, and a message appears stating the end of the quiz
        newDiv.textContent = "The quiz has ended!";
    } else {
        //questions continue if all questions havent been answered yet
        showQuestion(questionIndex);
    }
    questionDiv.appendChild(newDiv);
}
//the ending function, which allows you to set your initials and save your score
function fin() {
    questionDiv.innerHTML = "";
    currentTime.style.display = "none";
//h1 header declaring the end of the game
    var endGameH1 = document.createElement("h1");
    endGameH1.setAttribute("id", "endGameH1");
    endGameH1.textContent = "Thats all folks!"

    questionDiv.appendChild(endGameH1);

    //p tag that shows your final score 
    var endGameP = document.createElement("p");
    endGameP.setAttribute("id", "endGameP");
    endGameP.textContent = "Your final score is " + quizScore;

    questionDiv.appendChild(endGameP);
    
//a label asking to write your handle aka initials
    var newLabel = document.createElement("label");
    newLabel.setAttribute("id", "newLabel");
    newLabel.textContent = "Enter your handle: ";

    questionsDiv.appendChild(newLabel);

    //input on html for initials to be entered in to
    var newInput = document.createElement("input");
    newInput.setAttribute("type", "text");
    newInput.setAttribute("id", "tag");
    newInput.textContent = "";

    questionsDiv.appendChild(newInput);
//submit button for you to send the score to the scoreboard
    newSubmit
    var newSubmit = document.createElement("button");
    newSubmit.setAttribute("type", "submit");
    newSubmit.setAttribute("id", "submit");
    newSubmit.textContent = "Submit Results";

    questionsDiv.appendChild(newSubmit);
//submit button listener that saves our scores to local storage
    newSubmit.addEventListener("click", function () {
        var initials = newInput.value;
//must enter a valid response
        if (initials === null) {

            console.log("Invalid Response");

        } else {
            //object that is defining our scores and name to be saved into local storage
            var finalScore = {
                initials: initials,
                score: quizScore,
            }
            console.log(finalScore);
            var scoreBoard = localStorage.getItem("scoreBoard");
            if (scoreBoard === null) {
                scoreBoard = [];
            } else {
                scoreBoard = JSON.parse(scoreBoard);
            }
            scoreBoard.push(finalScore);
            var newScore = JSON.stringify(scoreBoard);
            localStorage.setItem("scoreBoard", newScore);
            window.location.replace("highscores.html");
        }
    });

}


