// write a function that detects how many vowels are in a sentence  //there are 11 vowels in the sentence

function detectVowels(sentence) {
  let vowelCount = 0;
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

  // for of loop is used to loop through iterable objects
  // strings too

  for (const character of sentence) {
    if (vowels.includes(character)) {
      ++vowelCount;
    }
  }
  return "there are " + vowelCount + " vowels in the sentence ";
}

console.log(detectVowels("grace"));

// have a function that will detect if a word is palindrome  output // word is not a palindrome

function isPalindrome(string) {
    // changes the word to an array 
  const arrayWord = string.split("");
  console.log(arrayWord, "arrayword")

//   reverse the array and chnages it back to an array 
  const reversedValue = arrayWord.reverse().join('');
  console.log(reversedValue, "reversedValue")

//   check if the string and reversed value is the same
  if (string === reversedValue) {
    return "word is a palindrome";
  } else {
    return "word is not a palindrome";
  }
}


console.log(isPalindrome("Man nam"))


function reverseString(string) {
    const reversestring = string.split('').reverse().join('')
    return reversestring
}

console.log(reverseString("hello"))