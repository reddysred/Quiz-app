const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("question");
const optionsContainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submitBtn");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

// Array of quiz questions
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A:Berlin", "B:Madrid", "C:Paris", "D:Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["A:Mars", "B:Jupiter", "C:Venus", "D:Saturn"],
        correctAnswer: "Mars"
    },
    // Add more questions as needed
];

// Function to load the current question and options
function loadQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    // Clear previous options
    optionsContainer.innerHTML = "";

    // Create and append options
    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.textContent = option;
        optionButton.onclick = function() {
            selectAnswer(option, currentQuestion.correctAnswer);
        };
        optionsContainer.appendChild(optionButton);
    });
}

// Function to handle user's answer
function selectAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        feedbackElement.textContent = "Correct!";
        score++;
    } else {
        feedbackElement.textContent = "Incorrect. The correct answer is: " + correctAnswer;
    }

    // Move to the next question
    currentQuestionIndex++;

    // Check if the quiz is complete
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Function to handle quiz completion
function endQuiz() {
    quizContainer.innerHTML = "<h2>Quiz Completed!</h2>";
    scoreElement.textContent = "Final Score: " + score + " out of " + quizQuestions.length;
}

// Function to submit the user's answer
function submitAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        selectAnswer(selectedOption.value);
    }
}

// Load the first question when the page loads
loadQuestion();
