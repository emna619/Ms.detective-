

function startMission() {
  window.location.href = "puzzle1.html";
}


function checkMorseAnswer() {
    const answer = document.getElementById("morseAnswer").value.toLowerCase();
    const result = document.getElementById("morseResult");
  
    if (answer === "bloodied pop star") {
      result.textContent = "true. next";
      result.style.color = "green";
      setTimeout(() => {
        window.location.href = "puzzle2.html"; // Redirect to the next puzzle
      }, 2000); // Wait 2 seconds before redirecting
    } else {
      result.textContent = "Incorrect.";
      result.style.color = "red";
    }
  }
  function checkRiddleAnswer() {
    const answer = document.getElementById("riddleAnswer").value.toLowerCase();
    const result = document.getElementById("riddleResult");
  
    if (answer === "immune system" || answer === "the body") {
      result.textContent = "Correct, how smart ";
      result.style.color = "green";
      setTimeout(() => {
        window.location.href = "final.html"; // Redirect to the final page
      }, 2000); // Wait 2 seconds before redirecting
    } else {
      result.textContent = "Incorrect.";
      result.style.color = "red";
    }
  }