const questions = [
    {
        question: " Been able to concentrate on whatever you’re doing?",
        answers: [
            {text: "Better than usual", correct: true},
            {text: "Same as usual", correct: false},
            {text: "Less than usual", correct: false},
            {text: "Much less than usual", correct: false}
        ]
    },
    {
        question: " Lost much sleep over worry?",
        answers: [
            {text: "Not at all", correct: true},
            {text: "No more than usual", correct: false},
            {text: "Rather more than usual", correct: false},
            {text: "Much more than usual", correct: false}
        ]
    },
    {
        question: " Felt that you are playing a useful part in things?",
        answers: [
            {text: "More so than usual", correct: true},
            {text: "Same as usual", correct: false},
            {text: "Less than usual", correct: false},
            {text: "Much less than usual", correct: false}
        ]
    },
    {
        question: " Felt capable of making decisions about things?",
        answers: [
            {text: "More so than usual", correct: true},
            {text: "Same as usual", correct: false},
            {text: "Less so usual", correct: false},
            {text: "Much less capable", correct: false}
        ]
    },
    {
        question: " Felt constantly under strain?",
        answers: [
            {text: "Not at all", correct: true},
            {text: "No more than usual", correct: false},
            {text: "Rather more than usual", correct: false},
            {text: "Much more than usual", correct: false}
        ]
    },
    {
        question: " Felt you couldn’t overcome your difficulties?",
        answers: [
            {text: "Not at all", correct: true},
            {text: "No more than usual", correct: false},
            {text: "Rather more than usual", correct: false},
            {text: "Much more than usual", correct: false}
        ]
    },
    {
        question: " Been able to enjoy your normal day-to-day activities?",
        answers: [
            {text: "More so than usual", correct: true},
            {text: "Same as usual", correct: false},
            {text: "Less so usual", correct: false},
            {text: "Much less than usual", correct: false}
        ]
    },
    {
        question: " Been able to face up to your problems?",
        answers: [
            {text: "More so than usual", correct: true},
            {text: "Same as usual", correct: false},
            {text: "Less so usual", correct: false},
            {text: "Much less able", correct: false}
        ]
    },
    {
        question: " Been feeling unhappy and depressed?",
        answers: [
            {text: "Not at all", correct: true},
            {text: "No more than usual", correct: false},
            {text: "Rather more than usual", correct: false},
            {text: "Much more than usual", correct: false}
        ]
    },
    {
        question: " Been losing confidence in yourself?",
        answers: [
            {text: "Not at all", correct: true},
            {text: "No more than usual", correct: false},
            {text: "Rather more than usual", correct: false},
            {text: "Much more than usual", correct: false}
        ]
    },
    {
        question: " Been thinking of yourself as a worthless person?",
        answers: [
            {text: "Not at all", correct: true},
            {text: "No more than usual", correct: false},
            {text: "Rather more than usual", correct: false},
            {text: "Much more than usual", correct: false}
        ]
    },
    {
        question: " Been feeling reasonably happy, all things considered?",
        answers: [
            {text: "More so than usual", correct: true},
            {text: "Same as usual", correct: false},
            {text: "Less so usual", correct: false},
            {text: "Much less than usual", correct: false}
        ]
    },
    {
        question: " How well would you say you are managing financially these days?",
        answers: [
            {text: "Better than usual", correct: true},
            {text: "Same as usual", correct: false},
            {text: "Less than usual", correct: false},
            {text: "Much less than usual", correct: false}
        ]
    },
    {
        question: " Have you ever received treatment for depression, anxiety, or other mental health problem in the past? \n (Treatment might be tablets, or counselling, or seeing a psychiatrist or other mental health professional)",
        answers: [
            {text: "Yes", correct: true},
            {text: "No", correct: false},
        ]
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let ans;
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    if(document.querySelector(".correct"))
    document.querySelector(".correct").classList.remove("correct");
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("correct");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            // button.classList.add("correct");
        }
        // button.disabled = true;
    });
    nextButton.style.display = "block";
    ans= selectedBtn.innerHTML;
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    console.log(ans);
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();