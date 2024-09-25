function rollDice() {
    const dice = document.getElementById('dice');

    // Clear any existing interval if dice is already rolling
    if (dice.rollingInterval) {
        clearInterval(dice.rollingInterval);
    }

    let currentRotationX = 0;
    let currentRotationY = 0;

    // Set the total rolling time to a random value between 5 to 7 seconds
    let rollingTime = Math.random() * (7 - 5) + 5; // Random number between 5 and 7 seconds

    // Set an interval to continuously rotate the dice fast (every 0.7 seconds)
    dice.rollingInterval = setInterval(() => {
        // Generate fast random rotations
        let randomRotationX = Math.floor(Math.random() * 4 + 1) * 90;
        let randomRotationY = Math.floor(Math.random() * 4 + 1) * 90;

        // Update the rotation values
        currentRotationX += randomRotationX;
        currentRotationY += randomRotationY;

        // Apply the new rotation
        dice.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
    }, 500); // Rotate every 0.7 seconds for fast rolling

    // Stop the rolling after the set rolling time (5 to 7 seconds)
    setTimeout(() => {
        clearInterval(dice.rollingInterval);
    }, rollingTime * 1000); // Convert rollingTime from seconds to milliseconds
}
