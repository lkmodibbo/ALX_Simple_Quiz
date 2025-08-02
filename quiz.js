document.getElementById('submit-answer').addEventListener('click', checkAnswer);

function checkAnswer() {
    // 1. Get the selected option. This MUST be inside the function
    //    so it gets the most recent selection every time the button is clicked.
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // 2. Check if an option was selected. This is the first thing to check.
    if (!selectedOption) {
        alert("Please select an answer");
        return; // If no option is selected, exit the function now.
    }
    
    // 3. Define the correct answer.
    const correctAnswer = '4';

    // 4. If we get here, an option was selected. Get its value.
    const userAnswer = selectedOption.value;

    // 5. Compare the user's answer to the correct answer.
    if (userAnswer === correctAnswer) {
       document.getElementById('feedback').textContent = "Correct! Well done"
    } else {
        document.getElementById('feedback').textContent = "That's incorrect. Try again"
    }
}
document.getElementById('submit-answer').addEventListener('click', checkAnswer)