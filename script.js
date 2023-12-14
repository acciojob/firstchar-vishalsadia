function firstChar(str) {
  // Remove leading and trailing whitespaces
  const trimmedStr = str.trim();

  // Check if the trimmed string is not empty
  if (trimmedStr !== '') {
    // Return the first character of the trimmed string
    return trimmedStr.charAt(0);
  }

  // Return an empty string if the input string is empty or contains only spaces
  return '';
}

// Test cases
console.log(firstChar(' Rosa Parks '));  // Output: 'R'
console.log(firstChar(' Hello World ')); // Output: 'H'
console.log(firstChar(' '));              // Output: ''
console.log(firstChar(''));               // Output: ''
