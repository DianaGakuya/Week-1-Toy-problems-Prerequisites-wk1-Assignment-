function calculateSpeed() {
    // Input
    let carspeed = Number(prompt("Enter the car's speed"));

    const speedlimit = 70;
    let currentPoints = 0;

    if (carspeed < speedlimit) {
        alert("Your current points: 0 (OK)");
    } else {
        // Use a loop to check each speed range condition and update currentPoints
        for (let i = 75; i <= 130; i += 5) {
            if (carspeed >= i) {
                currentPoints += 1;
            } else {
                break; // Exit the loop once the condition is not met
            }
        }

        if (currentPoints >= 12) {
            alert(`Your current points: ${currentPoints} (License suspended)`);
        } else {
            alert(`Your current points: ${currentPoints}`);
        }
    }
}

calculateSpeed();
