
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them.
//But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product

//two prompts for the user to give you a number, parseInt to change prompt input from a string to a number
let userInput1 = parseInt(prompt("Hello guest, we are  about to multiply two numbers. I will write down your answer on the webpage. To begin, please type in a whole number (or integer), positive numbers only."));

//asks user for second number because 1 is a lonely number that needs another to multiply with  
let userInput2 = parseInt(prompt("Thanks, now please give me a second whole number. Again positive numbers only. Please and Thank you."));

// this if statement deals with if a user inputs a zero. 
//because my code gives the correct answer only if the negative number is the first number not second.
//so here I address it by the if statement
 const multiplication = (number1, number2) => {

  if(number1 === 0 || number2 === 0){
    return 0;
  }
  let sum = number1;
  for(let i = 1; i < number2; i++){
      sum += number1;
  }
  return sum
}
const answer1 = multiplication(userInput1,userInput2);
console.log('answer1', answer1)

const htmlTarget = document.getElementById('a-1')
htmlTarget.innerHTML = answer1



//------------------------ Question 2 ---------------------------
// Write a function that recieves a string as a parameter and evaluate each character of the
//string to determinate if the character is vowel or a consonant. you have to store each character
//on separates arrays, one for vowels and the other one for consonants.
// after separating the characters concatenate both arrays. ask the user if wants the vowels 
//first or consonants first in the final array.
//hint:

//@param {string}
//@return {character} => array of characters

//prompt to ask user for word input
//added .toLowerCase for the rebellious kitties, also just to make sure my code works
let userInput = prompt("Hello again guest. This time I want to ask you for a random word that I will chop up into vowels and consonants. \nTo start this, Type in a single word in all lowercase, no spaces please.").toLowerCase();

vowelOrConsonant = (str) => {
  //to check if vowel/con we will create an array for vowels to compare the input string
  let vowelCheck = ['a','e','i','o','u'];
  let userVowels = [];
  let userCons = [];
  //now we want to make a loop to check each character of the user's string for vowels
  //and pushes each character in the appropriate array
  for(let i = 0; i < str.length; i++){
    if(vowelCheck.includes(str[i])){
      userVowels.push(str[i]);
      }else{
        userCons.push(str[i]);
        }
    }

  //ask user if they want vowels or cons first in prompt
  //added .toLowerCase for the rebellious kitties  
  let firstVorC = prompt("I've chopped up your chosen word. What would you like first? Would you like 'vowels' or 'consonants' first. Please type your choice in lowercase letters as shown, but without typing the quotes.").toLowerCase();
    
  if(firstVorC == "vowels"){
    //if user types "vowels" then you concat vowels array then consonants
    return userVowels.concat(userCons);
  }else if(firstVorC == "consonants"){
    //if user had types 'consonants' then you concat consonant array then vowels
    return userCons.concat(userVowels);
    }
  }

const answer2 = vowelOrConsonant(userInput)

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
/* Now let's create a small game. The game consists in a player (ask the user for the name).
The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.

If the player don't find the number, the program must displays an alert and stop the game,
but if the player finds the number, then the program must show a congratulations message (alert)
with the name of the player in upperCase letters and stop the game

You must have to store the player information in a 'player' object.
The Player object contains the following Properties:
 {string} name, {number} lives, {numbers} fail_numbers[]
where: name, saves the name of the player. Lives, represents the remaining oportunities
each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers
the player has used */

//@return {string} win / gameOver => the string that says if the user wasted
//the three oportunities showing the fails numbers or the name if the player wins
guessTheNumber  = () => {
//ask for player name, while also giving a general introduction to the number game
let playerName = prompt("Hello player, now we are about to play a random number game. Where you guess my number between 10-50. Good luck! Before we begin, can you please type in your name?");

//make a random number between 10-50
//this game only makes 1 random number, it will not make the player guess 3 random numbers per life
var randomNumBot = Math.floor(Math.random() * 40) + 10;
//if curious, you may see the random number in the console
console.log(randomNumBot);

//need object to store player game information here
let playerStats = {
  name: "",
  gameTries: 3,
  fail_number: [],
};

//the code below will input the player name into the stats object
playerStats["name"] = playerName;


/*here we will have a loop for the player to guess the name until they have either guessed the random number or have made 3 attempts and recieve LOSER alert*/
//plan in future to include playerStats.lives as part of the loop. for now this code works. thanks for understanding
for(let i = 3; i > 0; i--){
  let playerGuess = parseInt(prompt(`${playerStats["name"]}, you have ${playerStats["gameTries"]} tries to guess my number. Guess my number between 10 and 50:`));
  if(playerGuess == randomNumBot){
    //I also wanted to put a return here so it shows up on the html but it greys out my break (line 141) when I want to also tell it to return a string for the Congradulatory message
    alert(`Congrats, ${playerStats.name.toUpperCase()} you successfully guessed my number! My random number was indeed ${randomNumBot}. Thanks for playing!`);
    break;
  }else if(playerGuess !== randomNumBot){
    //include way to decrement gameTries
    playerStats.fail_number.push(playerGuess);
    playerStats["gameTries"]--;
    console.log(playerStats.gameTries);
  }if(playerStats.gameTries == 0){
    return playerStats.fail_number.join(', and ');
  }
}  
}

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
/* In the function below we are giving you an array of objects, each one with the same properties.
Ask to the user for 3 different options to sorting the array from the highest to lowest.

In the case of a string, the criteria to sort must be the length of the string.

The first one is sorting the array of objects based on the title property. 
The second one sorting the array of objects based on the author property, 
the third one based on the library property.

finally, the return value has to be the string sorted
of the property selected separeted with a semicolon. 

Remember you have to sort all of the array based on the selected property
example: if the user select sorting by title the return value must be:
"Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"
*/
// 1 - ask user which library info they want
// 2 - sort values in desending order
// 3 - return with semicolon
sort = () => {

  var library = [
   {
       title:  'The Road Ahead',
       author: 'Bill Gates',
       libraryID: 1254
   },
   {
       title: 'Walter Isaacson',
       author: 'Steve Jobs',
       libraryID: 4264
   },
   {
       title: 'Mockingjay: The Final Book of The Hunger Games',
       author: 'Suzanne Collins',
       libraryID: 3245
   }];
// asking user what information they want (title, author, libraryID)
let libraryPrompt = prompt(`Hello, we have a small library of 3 books. We specialize in giving our information in descending order. \nType one of the following for your choice (type it exactly as shown, do not include quotes): 'title', 'author', or 'libraryid'`)
//made an array so user selection can be pushed then sorted in this array
let smallShelf = [];
for(i = 0; i < library.length; i++)
if(libraryPrompt == "title"){
  smallShelf.push(library[i].title);
  smallShelf.sort(function(a, b){
  return b.length - a.length});
}else if(libraryPrompt == "author"){
 smallShelf.push(library[i].author);
 smallShelf.sort(function(a, b){
  return b.length - a.length});
}else if (libraryPrompt == "libraryid"){
  smallShelf.push(library[i].libraryID);
  smallShelf.sort(function(a, b){
  return b - a});
}

return smallShelf.join('; ')
  
}

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
