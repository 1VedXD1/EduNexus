function runCode(editorId, outputId) {
    const code = document.getElementById(editorId).value;
    const outputElement = document.getElementById(outputId);
    try {
        // Remove the script tags and run the code using eval
        const result = eval(code);
        outputElement.textContent = result !== undefined ? result : '';
    } catch (error) {
        outputElement.textContent = 'Error: ' + error.message;
    }
}

function checkQuizAnswer(event, correctAnswer, feedbackId) {
    event.preventDefault();
    const form = event.target;
    const feedback = document.getElementById(feedbackId);
    const selectedAnswer = form.querySelector('input[name="quiz-1"]:checked');
    
    if (selectedAnswer) {
        if (selectedAnswer.value === correctAnswer) {
            feedback.textContent = 'Correct!';
            feedback.style.color = 'green';
        } else {
            feedback.textContent = 'Incorrect. Try again.';
            feedback.style.color = 'red';
        }
    } else {
        feedback.textContent = 'Please select an answer.';
        feedback.style.color = 'red';
    }
}
