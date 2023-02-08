//Those are most of the variables I'm using in my webapplication.

var timerElement = document.querySelector(".timer");
var secondsLeft = 60;
var startElement = document.querySelector("#startQuiz");
const questionContainer = document.getElementById("question-container");
var startCount = 0
var timeInterval = "";
var result = document.getElementById("result")

//This is a timer that I've program. Once it hit zero it clear the timer, and does the end
//quiz function.

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

//Those are my questions, choices and answer for the quiz.

const questions = [
    {
        question: "What is use at the end of a function?",
        choices: ["commas", "period", "asterisk", "parentheses"],
        answer: "parentheses"
    },
    {
        question: "What is NOT a data type?",
        choices: ["string", "boolean", "variable", "number"],
        answer: "variable"
    },
    {
        question: "What would console.log('hello') log?",
        choices: ["hello", "('hello')", "'hello'", "nothing" ],
        answer: "hello"
    },
    {
        question: "What is 'var' being replace with?", 
        choices: ["con", "let", "this", "sum"],
        answer: "let"
    },
    {
        question: "What does '>=' mean?",
        choices: ["less than or equal", "equal", "less than", "more than or equal"],
        answer: "more than or equal"
    }
];

//This is my function that make the question appear on the screen.

function getNextQuestion() {
    questionContainer.innerHTML = "";
    if (startCount >= questions.length || secondsLeft <= 0) {
        clearInterval(timeInterval);
        endQuiz();
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
                secondsLeft = secondsLeft - 15;
                timerElement.textContent = "Time remaining: " + secondsLeft + ".";
            }
            startCount = startCount + 1
            getNextQuestion()
        }
      }) 
}

//This is the function that run once the timer hit zero, or that all the question are 
//answered.

function endQuiz() {
    if (secondsLeft < 0) {
        secondsLeft = 0;
    }
    document.getElementById("question-container").style.display = "none";
    var resultText = `
   <div class="timer-result">
    <p>You have ${secondsLeft} point(s)</p>
    </div>
    `;
    result.innerHTML += resultText;

    var enterInitials = `
    <div class="initials">
    <input id="user-highscore" type="text" placeholder="Please enter initials"><button id="set">Save</button>
    `;
    result.innerHTML += enterInitials;

    document.getElementById('set').addEventListener('click', saveInitials);
}

//This is a function that save the highscore in the local storage, and that display it
//on the screen.

function saveHighScore() {}
var names = [];

var saveInitials = (ev) => {
    ev.preventDefault();
    
    var names = JSON.parse(localStorage.getItem('NameAndScore')) || [];
    let score = {
        initials: document.getElementById('user-highscore').value.trim(),
        highScore: secondsLeft,
    };
    names.push(score);
    
    var showHighScore = `
    <div class="showHighScore">
        <p>Initial: ${score.initials} Score: ${score.highScore}</p>
        `;
        result.innerHTML += showHighScore
    
    localStorage.setItem('NameAndScore', JSON.stringify(names));
};