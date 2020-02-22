/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log('Problem 1:')

// Add your code below this line

//return the card score of either player that is less than or equal to 21
//difference of 21 - card score

let playerCardScore = 0
let dealerCardScore = 0
let result = 0

function blackJack(playerCardScore,dealerCardScore){
  if (playerCardScore > 21 && dealerCardScore > 21){
    result = 0
  } else if(playerCardScore === 21 && dealerCardScore === 21) {
    result = 21
  } else if(playerCardScore > 21) {
    result = dealerCardScore
  } else if(dealerCardScore > 21) {
    result = playerCardScore
  } else if ((21 - playerCardScore) < (21-dealerCardScore)){
    result = playerCardScore
  } else if ((21 - playerCardScore) > (21-dealerCardScore)){
    result = dealerCardScore
  }
  return result

  console.log(`Result: ${result}`)
}

console.log(blackJack(19, 21))

console.log(blackJack(22, 22))

console.log(blackJack(19, 22))

console.log(blackJack(21, 21))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log('Problem 2:')

// Add your code below this line


function scrabbleScore(word) {
//object of all letters and their corresponding value for Scrabble game
  letterValues = {'A':1,'E':1,'I':1,'O':1,'U':1,'L':1,'N':1,'R':1,'S':1,'T':1,'D':2,'G':2,'B':3,'C':3,'M':3,'P':3,'F':4,'H':4,'V':4,'W':4,'Y':4,'K':5,'J':8,'X':8,'Q':10,'Z':10}

//variable for sum of letters in word
let wordScore = 0

//string given in lower case so I am using the toUpperCase method to convert the string to UPPERCASE letters

let lettersToScore = word.toUpperCase().split('')

//Using the split method to take every letter in the string into an array
//lettersToScore = lettersToScore.split('')

//console.log(lettersToScore)

//loop through string and sum the value of the letter scores

for (let i = 0; i<lettersToScore.length;i++) {
  let letter = lettersToScore[i]
  wordScore = wordScore + letterValues[letter]
  //console.log(wordScore)
}


  return wordScore

  //console.log(wordScore)


}
console.log(`cabbage - ${scrabbleScore("cabbage")}`)

console.log(`javascript - ${scrabbleScore("javascript")}`)

console.log(`function - ${scrabbleScore("function")}`)


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log('Problem 3:')

// Add your code below this line

function isPalindrome(string){

  let reverseString = string.split('').reverse('').join('')

  if (reverseString === string) {
    return true
  } else {
    return false
  }

}

console.log(`noon - ${isPalindrome('noon')}`)

console.log(`racecar - ${isPalindrome('racecar')}`)

console.log(`moon - ${isPalindrome('moon')}`)

console.log(`run - ${isPalindrome('run')}`)

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log('Problem 4:')

// Add your code below this line


function doubleLetters(word) {
  let letters = word.split('')

  for (let i = 0; i < letters.length - 1; i++){
    let previousLetter = letters[i]
    let currentLetter = letters[i + 1]

    let result = previousLetter===currentLetter

    //console.log(previousLetter===currentLetter)

    //console.log(`${previousLetter} - ${currentLetter}`)

      if (result === true) {
        return result
      } else {
        continue
      }




    }
    if (result === true){
      return result
    } else {
      return false
    }
}

console.log(doubleLetters("loop"))

console.log(doubleLetters("rune"))

console.log(doubleLetters("apple"))

// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log('Problem 5 - bonus:')

// Add your code below this line

function wordCount(string) {
  //split string by word; second string has a comma after shark,
  let words = string.toLowerCase().replace(',',' ').split(' ')
  let count = {}

  //console.log(words)

  for(let i = 0; i < words.length; i++){
    const currentString = words[i]
    if (count[currentString] !== undefined) {
      count[currentString] = count[currentString] + 1
    } else {
      count[currentString] = 1
    }
    let result = count
  }
  return count
}

console.log(wordCount("olly olly in come free"))

console.log(wordCount("Baby shark, doo doo doo doo doo doo"))

console.log(wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall"))


// Add your code above this line

/** added for formatting purposes **/
console.log('')
console.log('-----------------')
