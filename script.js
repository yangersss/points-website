document.addEventListener('DOMContentLoaded', () => {
    let points = 300;
    updatePointsDisplay();
    updatePercentages(); // Initialize percentages when the page loads

    // Select all your bet buttons
    const betButtons = document.querySelectorAll('.bet-button');

    // Loop over each button and add a click event listener
    betButtons.forEach(button => {
        button.addEventListener('click', () => {
            const color = button.id; // Get the color from the button's id
            const betAmount = parseInt(document.getElementById('bet-amount').value);
            const { redPercentage, bluePercentage } = updatePercentages(); // Recalculate percentages only once per bet

            // Check if the bet is correct
            const isCorrectBet = (color === 'red' && Math.random() < redPercentage / 100) ||
                (color === 'blue' && Math.random() < bluePercentage / 100);

                if (isCorrectBet) {
                    // Player wins - rounding the calculated points
                    points += Math.round(betAmount * (1 / (color === 'red' ? redPercentage : bluePercentage) * 100));
                } else {
                    // Player loses
                    points -= betAmount;
                }

            // Blur the button to remove focus
            button.blur();
            // Update points display
            updatePointsDisplay();
            // Recalculate percentages for next bet
            updatePercentages();
        });
    });

    function updatePointsDisplay() {
        const pointsElement = document.getElementById('points');
        pointsElement.textContent = Math.round(points);
        pointsElement.classList.add('change');
    
        // Remove the class after the animation completes
        setTimeout(() => {
            pointsElement.classList.remove('change');
        }, 300); // The timeout duration should match the animation duration
    }
      

    function updatePercentages() {
        const redPercentage = Math.floor(Math.random() * 50) + 25; // 25% to 75%
        const bluePercentage = 100 - redPercentage; // Remaining percentage

        // Set the text content for percentages
        document.getElementById('red-percentage').textContent = `${redPercentage}%`;
        document.getElementById('blue-percentage').textContent = `${bluePercentage}%`;

        // Update the ratios
        document.getElementById('red-ratio').textContent = `1:${(100 / redPercentage).toFixed(1)}`;
        document.getElementById('blue-ratio').textContent = `1:${(100 / bluePercentage).toFixed(1)}`;

        return { redPercentage, bluePercentage };
    }
});
