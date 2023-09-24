// Function to calculate student grade
function calculateGrade() {
    //Input
    const userInput = prompt("Enter student marks (0-100):");
    const marks = Number(userInput);


//Main function to check grade.. if statements
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input. Please enter a valid number between 0 and 100.");
    } else {
        let grade;
        if (marks > 79) {
            grade = "A";
        } else if (marks >= 60) {
            grade = "B";
        } else if (marks >= 50) {
            grade = "C";
        } else if (marks >= 40) {
            grade = "D";
        } else {
            grade = "E";
        }
// Output , either console log or alert
        console.log(`Grade: ${grade}`);
        alert(`Grade: ${grade}`);
    }
}

// Call the function to calculate the grade, if needed again
calculateGrade();
