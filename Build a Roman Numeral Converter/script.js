document.addEventListener("DOMContentLoaded", function() {
  const convertBtn = document.getElementById("convert-btn");
  const number = document.getElementById("number");
  const output = document.getElementById("output");

  convertBtn.addEventListener("click", function() {
    let num = number.value.trim();
    let parsedNumber = parseInt(num, 10);

    // Check for empty input
    if (!num) {
      output.textContent = "Please enter a valid number";
      return;
    }
    // Check for numbers less than 1
    else if (isNaN(parsedNumber) || parsedNumber < 1) {
      output.textContent = "Please enter a number greater than or equal to 1";
      return;
    }
    // Check for numbers greater than or equal to 4000
    else if (parsedNumber >= 4000) {
      output.textContent = "Please enter a number less than or equal to 3999";
      return;
    }

    const roman_numerals = [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1]
    ];

    let res = "";

    // Convert number to roman numerals
    for (let i = 0; i < roman_numerals.length; i++) {
      while (parsedNumber >= roman_numerals[i][1]) {
        res += roman_numerals[i][0];
        parsedNumber -= roman_numerals[i][1];
      }
    }

    output.textContent = res;
  });
});