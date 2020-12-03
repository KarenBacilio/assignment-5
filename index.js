
//------------------------ Question 1---------------------------
//Write a function that ask the user for two numbers and return the product of them.
//But the challenge here is that you can't use the operator * (you can't make the product)
//hint: multiplication is a sequence of sums

 //@param {number} number1
 //@param {number} number2
 //@return {number} product

/*Below asks the user to type in 2 numbers for the following multiplicaiton function
I understand that prompt(); gives a string, so I added parseInt(); to change it to a number.
Tired to put those variables in my parameter/inside function, but unsure how. 
*/
let userInput1 = prompt("Please type in a whole number (or integer).");
console.log(typeof(userInput1));
//console reads it gives out a string. as I thought

//the variable names are test1 as I am still figuring out if this will work or if I will offcially add it to my code.
let test1 = parseInt(userInput1);
console.log(typeof(test1));
//and now console says it is now a number, great!

let userInput2 = prompt("Thanks, now please give me a second whole number. Please and Thank you.")
let test2 = parseInt(userInput2);


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
const answer1 = multiplication()
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
const vowels = ['a','e','i','o','u'];
const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
vowelOrConsonant = () => {
  return
}

const answer2 = vowelOrConsonant()

const htmlTarget2 = document.getElementById('a-2')
htmlTarget2.innerHTML = answer2




//------------------------ Question 3 ---------------------------
//Now let's create a small game. The game consists in a player (ask the user for the name).
//The player has 3 oportunities to guess a number. The number is a random number between 10 - 50.
//If the player don't find the number, the program must displays an alert and stop the game, but if the player finds the number, then the program must show a congratulations message (alert) with the name of the player in upperCase letters and stop the game
//You must have to store the player information in a 'player' object. The Player object contains the following Properties:
// {string} name, {number} lives, {numbers} fail_numbers[]
//where: name, saves the name of the player. Lives, represents the remaining oportunities each time the player fails. Fail_numbers, is an array of numbers that stores the fail numbers the player has used

//@return {string} win / gameOver => the string that says if the user wasted the three oportunities showing the fails numbers or the name if the player wins
guessTheNumber  = () => {
  return
}

const answer3 = guessTheNumber()

const htmlTarget3 = document.getElementById('a-3')
htmlTarget3.innerHTML = answer3



//------------------------ Question 4 ---------------------------
/* In the function below we are giving you an array of objects, each one with the same properties.
Ask to the user for 3 diferentes options to sorting the array from the highest to lowest.
In the case of a string, the criteria to sort must be the length of the string.
The first one is sorting the array of objects based on the title property.
The second one sorting the array of objects based on the author property,
the third one based on the library property. finally, the return value has to be the string sorted
of the property selected separeted with a semicolon. Remember you have to sort all of the array based
on the selected property
example: if the user select sorting by title the return value must be:
"Mockingjay: The Final Book of The Hunger Games; Walter Isaacson; The Road Ahead"
*/
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

  return
}

const answer4 = sort()

const htmlTarget4 = document.getElementById('a-4')
htmlTarget4.innerHTML = answer4
