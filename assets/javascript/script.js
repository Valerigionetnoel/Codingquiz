var timerElement = document.querySelector(".timer");
var secondsLeft = 20;
var startElement = document.querySelector("#startQuiz");
var wrongAnswer1 = document.querySelector(".wrong1")
var wrongAnswer2 = document.querySelector(".wrong2")
var wrongAnswer3 = document.querySelector(".wrong3")
var rightAnswer = document.querySelector(".right")

startElement.addEventListener("click", function(){
    var timeInterval = setInterval(function(){
        secondsLeft--;
        timerElement.textContent = "Time remaining " + secondsLeft + ".";

        if(secondsLeft === 0) {
            clearInterval(timeInterval);
            gameOver();
        }
    }, 1000);
    function gameOver(){
        console.log("Game Over")
    }
})

wrongAnswer1.addEventListener("click", function(){
    secondsLeft -15;
    ()
    console.log(-15)
})

wrongAnswer2.addEventListener("click", function(){
    secondsLeft -15;
    console.log(-15)
})

wrongAnswer3.addEventListener("click", function(){
    secondsLeft -15;
    console.log(-15)
})

rightAnswer.addEventListener("click", function(){
    console.log("next")
})
