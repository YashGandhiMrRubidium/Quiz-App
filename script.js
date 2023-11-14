const questions = [
    {
        question: "What is the traditional greeting in computer programming that outputs 'Hello, World!'?",
        answers: [
            { text: "Option A", correct: false },
            { text: "Option B", correct: false },
            { text: "Option C", correct: false },
            { text: "Option D", correct: true },
        ]
    },
    {
        question: "In which programming language is the 'printf' function commonly used?",
        answers: [
            { text: "Option A", correct: false },
            { text: "Option B", correct: false },
            { text: "Option C", correct: false },
            { text: "Option D", correct: true },
        ]
    },
    {
        question: "How many bits are in a byte?",
        answers: [
            { text: "Option A", correct: false },
            { text: "Option B", correct: false },
            { text: "Option C", correct: false },
            { text: "Option D", correct: true },
        ]
    },
    {
        question: "What is the result of 2 + 2?",
        answers: [
            { text: "Option A", correct: false },
            { text: "Option B", correct: false },
            { text: "Option C", correct: false },
            { text: "Option D", correct: true },
        ]
    },
    {
        question: "Which programming language is known for its use in web development and is often associated with front-end development?",
        answers: [
            { text: "Option A", correct: false },
            { text: "Option B", correct: false },
            { text: "Option C", correct: false },
            { text: "Option D", correct: true },
        ]
    },
    // Additional questions
    {
        question: "What is the capital of Japan?",
        answers: [
            { text: "Option A", correct: false },
            { text: "Option B", correct: false },
            { text: "Option C", correct: false },
            { text: "Option D", correct: true },
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: [
            { text: "Option A", correct: false },
            { text: "Option B", correct: false },
            { text: "Option C", correct: false },
            { text: "Option D", correct: true },
        ]
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: [
            { text: "Option A", correct: false },
            { text: "Option B", correct: false },
            { text: "Option C", correct: false },
            { text: "Option D", correct: true },
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answers: [
            { text: "Option A", correct: false },
            { text: "Option B", correct: false },
            { text: "Option C", correct: false },
            { text: "Option D", correct: true },
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answers: [
            { text: "Option A", correct: false },
            { text: "Option B", correct: false },
            { text: "Option C", correct: false },
            { text: "Option D", correct: true },
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
