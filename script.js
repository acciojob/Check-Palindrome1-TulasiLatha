// complete the given function

function isPalindrome(s) {
  // Function to clean and format the input string
  function cleanString(str) {
    return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  }

  const cleanedString = cleanString(s);

  // Compare the cleaned string with its reverse
  const reversedString = cleanedString.split('').reverse().join('');

  return cleanedString === reversedString;
}

// Example usage:
const inputString = "race a car";
const result = isPalindrome(inputString);
console.log(result); 
