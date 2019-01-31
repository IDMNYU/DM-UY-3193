## Day 2

* Questions about expectations, syllabus, etc?

* Web app presentations

* Javascript Assessment: overarching questions?

* Questions that emerged from Learning Logs

### Homework

The following assignment will be due on Thursday. However, if you feel ready to tackle it now, please feel free. Otherwise, make sure you complete a Learning Log that covers concepts that are foundational to Javascript such as arrays, loops, functions.

For this assignment, please use a web-based editor such as [Repl.it](https://repl.it/) or [JsFiddle](https://jsfiddle.net/) to code and save your solutions. You will be printing the answers to the console. Submit the link to your work via NYU Classes.

You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).

* Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

* Write a function called guessLetter that will:
  * Take one argument, the guessed letter.
  
  * Iterate through the word letters and see if the guessed letter is in there.
  
  * If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
  
  * When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
  
  * It should also figure out if there are any more letters that need to be guessed and if not, it should congratulate the user for winning the game.
  
Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.

Bonus: Make it like Hangman:
* Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.

* Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.

* Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.