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
    // console.log("start");
    showQuestion();
}

function showQuestion() {
    resetState();
    // console.log("show");
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    // console.log(currentQuestion);
    questionElement.innerHTML = questionNo + ".) " + currentQuestion.question;

    // Clear previous answer buttons
    answerButtons.innerHTML = "";

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => {
            selectAnswer(answer.correct)
        });
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("Correct");
        score++;
    } else {
        selectBtn.classList.add("Incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();
