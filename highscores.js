var highScore = document.querySelector("#highScore");
var clear = document.querySelector("#clear");

// Clearing the scoreboard on click 
clear.addEventListener("click", function () {
    localStorage.clear();
    location.reload();
});
// retrieving scores from storage to be printed onto scoreboard 
var scoreBoard = localStorage.getItem("scoreBoard");
scoreBoard = JSON.parse(scoreBoard);

if (scoreBoard !== null) {

    for (var i = 0; i < scoreBoard.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = scoreBoard[i].initials+ " " + scoreBoard[i].score;
        highScore.append(createLi);

    }
}

