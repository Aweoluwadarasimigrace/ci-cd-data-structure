let text = "i am learning data structure and algorithms";

// let words = text.split(" ");

function printNumber(num) {
  for (let i = 1; i < num; i++) {
    console.log(i);
  }
}


// write a function that detects how many vowels are in a sentence  //there are 11 vowels in the sentence
// have a function that will detect if a word is palindrome  output // word is not a palindrome
// write a reverse function that will reverse a string





let singleword = text.split(' ')


function capitalize(sentence) {
    let single_word = sentence.split(" ")
    console.log(single_word, "single_word")
    let word = ""

    for(let i=0; i <single_word.length; i++){
        word +=single_word[i][0].toUpperCase() + single_word[i].slice(1) + ' ' 
    }
return word
}

console.log(capitalize("my name is awe grace"))

// write a function that adds two numbers 


function addNum(a, b){
    return(a +b )
}

console.log(addNum(1, 3))