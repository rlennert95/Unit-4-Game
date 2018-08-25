var total = 0;
var wins = 0;
var losses = 0;
var targetNum = [Math.floor(Math.random() * 120) + 20];
console.log(total); 

function initializeCalculator() {
    total = 0;
    targetNum =  [Math.floor(Math.random() * 120) + 20];

    $("#score, #randomnumber").empty();
    $("#score").text("Your total score is: " + total);
    $("#randomnumber").text("Number to guess: " + targetNum );
  }

  function resultCheck () {             
    if  (total === targetNum) { //not working
        wins++;
        $("#wins").text("Wins: " + wins);
        alert("winner");
        initializeCalculator()

    } else if (total > targetNum) {
        losses++;
        $("#losses").text("Losses: " + losses);
        alert("loser"); 
        initializeCalculator()
    }
  }


$(document).ready(function () {


    $("#randomnumber").text("Number to guess: " + targetNum );

    $("#crystal1").on("click", function () {
        total += 10;
        $("#score").text("Your total score is: " + total);
        resultCheck();
    });

    $("#crystal2").on("click", function () {
        total += 7;
        $("#score").text("Your total score is: " + total);
        resultCheck();
    });

    $("#crystal3").on("click", function () {
        total += 9;
        $("#score").text("Your total score is: " + total);
        resultCheck();
    });

    $("#crystal4").on("click", function () {
        total += 13;
        $("#score").text("Your total score is: " + total);
        resultCheck();
    });

    
});





