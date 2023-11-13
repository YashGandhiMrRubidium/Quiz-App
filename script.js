const questions = [
    {
        question: "one hello World",
        answers: [
            { text: "ans A", correct: false },
            { text: "ans B", correct: false },
            { text: "ans C", correct: false },
            { text: "ans D", correct: true },
        ]
    },
    {
        question: "two",
        answers: [
            { text: "ans A", correct: false },
            { text: "ans B", correct: false },
            { text: "ans C", correct: false },
            { text: "ans D", correct: true },
        ]
    },
    {
        question: "3",
        answers: [
            { text: "ans A", correct: false },
            { text: "ans B", correct: false },
            { text: "ans C", correct: false },
            { text: "ans D", correct: true },
        ]
    },
    {
        question: "4",
        answers: [
            { text: "ans A", correct: false },
            { text: "ans B", correct: false },
            { text: "ans C", correct: false },
            { text: "ans D", correct: true },
        ]
    },
    {
        question: "5",
        answers: [
            { text: "ans A", correct: false },
            { text: "ans B", correct: false },
            { text: "ans C", correct: false },
            { text: "ans D", correct: true },
        ]
    }
];

let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    console.log("start")
    showQuestion();
}

function showQuestion() {
    resetState()
    console.log("show")
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = (currentQuestionIndex + 1);
    console.log(currentQuestion);
    questionElement.innerHTML = questionNo +".) " +(currentQuestion.question);

    // Clear previous answer buttons
    answerButtons.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => checkAnswer(answer.correct));
        answerButtons.appendChild(button);
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    alert("Quiz completed! Your score: " + score);
    // Additional logic or actions after the quiz ends
}

startQuiz();
