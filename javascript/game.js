$(document).ready(function () {

    var total = 0;
    var wins = 0;
    var losses = 0;
    var targetNum = [Math.floor(Math.random() * 120) + 20]; //if I delete this string of code and make it 0, the if/else statements work but making it worth any other number does not work
    console.log(targetNum);
    console.log(total); 
    

    $("#randomnumber").text("Number to guess: " + targetNum );

    $("#crystal1").on("click", function () {
        total += 10;
        $("#score").text("Your total score is: " + total);
    });

    $("#crystal2").on("click", function () {
        total += 7;
        $("#score").text("Your total score is: " + total);
    });

    $("#crystal3").on("click", function () {
        total += 9;
        $("#score").text("Your total score is: " + total);
    });

    $("#crystal4").on("click", function () {
        total += 13;
        $("#score").text("Your total score is: " + total);
    });

//need function that checks if numbers equal

    if  (total === targetNum) {
        wins++;
        $("#wins").text("Wins: " + wins);
        alert("winner");

    } else if (total >= targetNum) {
        losses++;
        $("#losses").text("Losses: " + losses);
        alert("loser")
    }

     
    
});





