//window.onload = function() {
 $("#stop").on("click", stopwatch.stop);
//$("#reset").on("click", stopwatch.reset);
//$("#start").on("click", stopwatch.start);
//};


//timeConverter: function(t) {

// var minutes = Math.floor(t / 60);
//var seconds = t - (minutes * 60);

// if (seconds < 10) {
//  seconds = "0" + seconds;
//}

//if (minutes === 0) {
//  minutes = "00";
//}
//else if (minutes < 10) {
//  minutes = "0" + minutes;
// }




function gameResults() {
    var answer1 = $("input[name=q-1]:checked").val();
    var answer2 = $("input[name=q-2]:checked").val();
    var answer3 = $("input[name=q-3]:checked").val();
    var answer4 = $("input[name=q-4]:checked").val();
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
        // results for question 4
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
        // results for question 5
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

}
