var timerElement = document.querySelector(".timer");
var secondsLeft = 90;
var startElement = document.querySelector("#startQuiz");
const questionContainer = document.getElementById("question-container");
var startCount = 0

// var wrongAnswer1 = document.querySelector("#wrong1")
// var wrongAnswer2 = document.querySelector("#wrong2")
// var wrongAnswer3 = document.querySelector("#wrong3")
// var rightAnswer1 = document.querySelector("#right1")

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
    // questionContainer.style.display = "block";
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
    if (startCount >= questions.length) {
       endQuiz()
       return
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
                secondsLeft = secondsLeft - 15
            }
            startCount = startCount + 1
            getNextQuestion()
        }
      })
       
   
}
function endQuiz(){
      
}

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