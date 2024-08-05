function rollDice() {
    const dice = document.getElementById('dice');
    let currentRotation = dice.style.transform || 'rotateX(0deg) rotateY(0deg)';
    
    // Generate a random number of 90-degree rotations to add on top of the current rotation
    let randomRotationX = Math.floor(Math.random() * 4 + 1) * 90;
    let randomRotationY = Math.floor(Math.random() * 4 + 1) * 90;

    // Apply the new rotation
    dice.style.transform = `rotateX(${randomRotationX}deg) rotateY(${randomRotationY}deg)`;
}
