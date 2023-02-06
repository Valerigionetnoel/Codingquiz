var timerElement = document.querySelector(".timer");
var secondsLeft = 90;
var startElement = document.querySelector("#startQuiz");
var wrongAnswer1 = document.querySelector("#wrong1")
var wrongAnswer2 = document.querySelector("#wrong2")
var wrongAnswer3 = document.querySelector("#wrong3")
var rightAnswer1 = document.querySelector("#right1")

startElement.addEventListener("click", function(){
    var timeInterval = setInterval(function(){
        secondsLeft--;
        timerElement.textContent = "Time remaining: " + secondsLeft + ".";

        if(secondsLeft <= 0) {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
    function gameOver(){
        console.log("Game Over")
    }
    document.getElementById("quiz").style.display = "none";
    document.getElementById("question1").style.display = "block";
})

wrongAnswer1.addEventListener("click", function(){
    secondsLeft = secondsLeft - 15;
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
})

 wrongAnswer2.addEventListener("click", function(){
    secondsLeft = secondsLeft - 15;
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
 })

 wrongAnswer3.addEventListener("click", function(){
    secondsLeft = secondsLeft - 15;
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
 })

rightAnswer1.addEventListener("click", function(){
    console.log("next")
    document.getElementById("question1").style.display = "none";
    document.getElementById("question2").style.display = "block";
})

// var questions = {
//     question1: "what is the sum of 2 and 2",
//     answer1:{
//         three : false,
//         four : true,
//         five : false
//     }
// }
// console.log(questions.answer1.four)

// if (questions.answer1.four === true) {
//     console.log("next")
// } else {
//     console.log("-15")
// }