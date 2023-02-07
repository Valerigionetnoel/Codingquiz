var timerElement = document.querySelector(".timer");
var secondsLeft = 20;
var startElement = document.querySelector("#startQuiz");
const questionContainer = document.getElementById("question-container");
var startCount = 0
var timeInterval = "";
var result = document.getElementById("result")
// var save = document.getElementById("save")
// var highScore = document.getElementById("highscore")

startElement.addEventListener("click", function(){
    timeInterval = setInterval(function(){
        secondsLeft--;
        timerElement.textContent = "Time remaining: " + secondsLeft + ".";

        if(secondsLeft <= 0) {
            clearInterval(timeInterval);
            endQuiz();
        }
    }, 1000);
    
    document.getElementById("quiz").style.display = "none";
    getNextQuestion()
})

const questions = [
    {
        question: "What is use at the end of a function?",
        choices: ["commas", "period", "asterisk", "parentheses"],
        answer: "parentheses"
    },
    {
        question: "What is the sum of two and two?",
        choices: ["three", "four", "five", "six"],
        answer: "four"
    },
    {
        question: "What is the last letter of the alphabet",
        choices: ["w", "x", "y", "z" ],
        answer: "z"
    }
];

function getNextQuestion() {
    questionContainer.innerHTML = "";
    if (startCount >= questions.length || secondsLeft <= 0) {
        clearInterval(timeInterval);
        endQuiz();
        return(timeInterval)
    }
    
    const question = questions[startCount];
    const choices = question.choices;
    const questionHTML = `
        <div class="question">
          <p>${question.question}</p>
          <ul>
            ${choices.map(choice => 
                `<button>${choice}</button>`
            ).join("")}
          </ul>
        </div>
      `;
      
      questionContainer.innerHTML += questionHTML;
      var buttons = document.querySelectorAll("button")
      console.log(buttons)
      buttons.forEach(button => {
        button.onclick = function () {
            if (button.innerText !== questions[startCount].answer) {
                secondsLeft = secondsLeft - 15;
                timerElement.textContent = "Time remaining: " + secondsLeft + ".";
            }
            startCount = startCount + 1
            getNextQuestion()
        }
      }) 
}
function endQuiz(){
    if (secondsLeft < 0){
        secondsLeft = 0
    } 
   var resultText = `
   <div class="timer-result">
    <p>You have ${secondsLeft} point(s)</p>
    </div>
    `;
    result.innerHTML += resultText
   
    var enterInitials = `
    <form class=="initials">
    <input id="highscore" type="text" placeholder="Please enter initials"><button id="save">Save</button>
    `;
    result.innerHTML += enterInitials
}
function saveHighScore() {

}
var names = []
var saveInitials = (ev) =>{
    ev.preventDefault();
    let score = {
        initials: document.getElementById("highscore").value,
        highScore: document.getElementById("timer-result")
    }
    names.push(score);
    document.querySelector("form").reset()

    localStorage.setItem("NameAndScore", JSON.stringify(names))
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("save").addEventListener("click", saveInitials);
});

// console.log(questionContainer)
// for (let i = 0; i < questions.length; i++) {
//     const question = questions[i];
//     const choices = question.choices;
//     const questionHTML = `
//     <div class="question">
//       <p>${question.question}</p>
//       <ul>
//         ${choices.map(choice => `<button>${choice}</button>`).join("")}
//       </ul>
//     </div>
//   `;
//    questionContainer.innerHTML += questionHTML;
// }
// console.log(questionContainer)

// wrongAnswer1.addEventListener("click", function(){
//     secondsLeft = secondsLeft - 15;
//     document.getElementById("question1").style.display = "none";
//     document.getElementById("question2").style.display = "block";
// })

//  wrongAnswer2.addEventListener("click", function(){
//     secondsLeft = secondsLeft - 15;
//     document.getElementById("question1").style.display = "none";
//     document.getElementById("question2").style.display = "block";
//  })

//  wrongAnswer3.addEventListener("click", function(){
//     secondsLeft = secondsLeft - 15;
//     document.getElementById("question1").style.display = "none";
//     document.getElementById("question2").style.display = "block";
//  })

// rightAnswer1.addEventListener("click", function(){
//     console.log("next")
//     document.getElementById("question1").style.display = "none";
//     document.getElementById("question2").style.display = "block";
// })

// var questions = {
//     question1: "what is the sum of 2 and 2",
//     
//         answer: "four"
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