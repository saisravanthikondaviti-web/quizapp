const questions = [
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlinks Text Mark Language",
            "None of these"
        ],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which one is a CSS framework?",
        options: ["React", "Bootstrap", "Node.js", "MongoDB"],
        answer: "Bootstrap"
    },
    {
        question: "Inside which HTML element do we put JavaScript?",
        options: ["<js>", "<script>", "<javascript>", "<code>"],
        answer: "<script>"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option-btn");
const nextBtn = document.getElementById("nextBtn");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const scoreEl = document.getElementById("score");

loadQuestion();

function loadQuestion() {
    resetOptions();
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;

    optionButtons.forEach((btn, index) => {
        btn.textContent = currentQuestion.options[index];
        btn.onclick = () => selectOption(btn, currentQuestion.answer);
    });
}

function selectOption(selectedBtn, correctAnswer) {
    optionButtons.forEach(btn => btn.disabled = true);

    if (selectedBtn.textContent === correctAnswer) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("wrong");
        optionButtons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add("correct");
            }
        });
    }
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function resetOptions() {
    optionButtons.forEach(btn => {
        btn.classList.remove("correct", "wrong");
        btn.disabled = false;
    });
}

function showResult() {
    quiz.classList.add("hide");
    result.classList.remove("hide");
    scoreEl.textContent = `You scored ${score} out of ${questions.length}`;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quiz.classList.remove("hide");
    result.classList.add("hide");
    loadQuestion();
}