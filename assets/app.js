var gameTime = 30;
var correctAnswers = 0;
var unAnswered = 0;
var incorrectAnswers = 0;
var timerGo = 0;

$(document).ready(function () {
    //hide quiz questions
    $("#quiz").hide();
    //hide quiz results/done page
    $("#results-div").hide();
    
    //click start button to begin the game and timer
    $("#start-game").on("click", function () {
        $("#quiz").show();
        timerGo = setInterval(decrement, 1000);
        clearInterval(intervalId);
    });

    function decrement() {
        gameTime--;
        //function for user running out of time

        $("#timer").html("<h2>Time Remaining:  " + gameTime + "</h2>");
        if (gameTime === 0) {
            clearInterval(timerGo);
            $("#timer").html("<h2>Time Remaining: " + gameTime + "</h2>");
            $("#quiz").hide();
            $("#results-div").show();
            gameResults();
        };
    }
    //function for user pressing done button prior to end of timer
    $("#stop-game").on("click", function () {
        clearInterval(timerGo);
        $("#quiz").hide();
        $("#results-div").show();
        gameResults();
        
    });
    // an array of the answers
    function gameResults() {
        var answer1 = $("input[name=q-1]:checked").val();
        var answer2 = $("input[name=q-2]:checked").val();
        var answer3 = $("input[name=q-3]:checked").val();
        var answer4 = $("input[name=q-4]:checked").val();
        var answer5 = $("input[name=q-5]:checked").val();
        console.log("answer");
        // results for question 1
        if ("correct" === answer1) {
            correctAnswers++;
            console.log("#1 is correct");
        }
        else if ("incorrect" === answer1) {
            incorrectAnswers++;
            console.log("#1 is incorrect");
        }
        else if (undefined === answer1) {
            unAnswered++;
            console.log("#1 is unanswered");
        }
        // results for question 2
        if ("correct" === answer2) {
            correctAnswers++;
            console.log("#2 is correct");
        }
        else if ("incorrect" === answer2) {
            incorrectAnswers++;
            console.log("#2 is incorrect");
        }
        else if (undefined === answer2) {
            unAnswered++;
            console.log("#2 is unanswered");
        }

        // results for question 3
        if ("correct" === answer3) {
            correctAnswers++;
            console.log("#3 is correct");
        }
        else if ("incorrect" === answer3) {
            incorrectAnswers++;
            console.log("#3 is incorrect");
        }
        else if (undefined === answer3) {
            unAnswered++;
            console.log("#3 is unanswered");
        }
        // results for question 4
        if ("correct" === answer4) {
            correctAnswers++;
            console.log("#4 is correct");
        }
        else if ("incorrect" === answer4) {
            incorrectAnswers++;
            console.log("#4 is incorrect");
        }
        else if (undefined === answer4) {
            unAnswered++;
            console.log("#4 is unanswered");
        }
        // results for question 5
        if ("correct" === answer5) {
            correctAnswers++;
            console.log("#5 is correct");
        }
        else if ("incorrect" === answer5) {
            incorrectAnswers++;
            console.log("#5 is incorrect");
        }
        else if (undefined === answer5) {
            unAnswered++;
            console.log("#5 is unanswered");
        }
        //correct
        $("#total-correct").html("<h5>You got " + correctAnswers + " correct!");
        //incorrect
        $("#total-incorrect").html("<h5>You got " + incorrectAnswers + " wrong!");
        // unanswered
        $("#total-unanswered").html("<h5>You did not answer " + unAnswered + " questions!");



    }
})
