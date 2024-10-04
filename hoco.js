document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const questionsContainer = document.getElementById('questions-container');
    const finalContainer = document.getElementById('final-container');
    const questionText = document.getElementById('question-text');
    const nextButton = document.getElementById('next-button');
    const answerBox = document.getElementById('answer-box');

    const questions = [
        "How are you doing today?",
        "What was the best part of your day today?",
    ];

    let currentQuestionIndex = 0;
    let responses = [];

    // Start button click event
    startButton.addEventListener('click', function() {
        startButton.parentElement.classList.add('hidden');
        questionsContainer.classList.remove('hidden');
        questionText.textContent = questions[currentQuestionIndex];
    });

    // Next button click event
    nextButton.addEventListener('click', function() {
        responses.push(answerBox.value); // Store the user's answer
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            questionText.textContent = questions[currentQuestionIndex];
            answerBox.value = '';
        } else {
            questionsContainer.classList.add('hidden');
            finalContainer.classList.remove('hidden');
            console.log('User responses:', responses); // Log responses to console
        }
    });

    // Yes button action
    window.goToNextPage = function() {
        window.location.href = "npg.html"; // Update with actual next page URL
    };
});
