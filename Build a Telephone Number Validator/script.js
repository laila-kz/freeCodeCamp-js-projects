const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

// Clear function
function clearResults() {
  resultsDiv.textContent = "";
  resultsDiv.classList.remove("valid", "invalid");
}

// Check button functionality
checkBtn.addEventListener("click", function () {
  const phoneNumber = userInput.value.trim();

  // If input is empty, prompt user
  if (phoneNumber === "") {
    alert("Please provide a phone number");
    return;
  }

  // Improved regex pattern
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  // Check validity based on regex
  if (regex.test(phoneNumber)) {
    resultsDiv.textContent = `Valid US number: ${phoneNumber}`;
    resultsDiv.classList.add("valid");
    resultsDiv.classList.remove("invalid");
  } else {
    resultsDiv.textContent = `Invalid US number: ${phoneNumber}`;
    resultsDiv.classList.add("invalid");
    resultsDiv.classList.remove("valid");
  }
});

// Clear button functionality
clearBtn.addEventListener("click", clearResults);
