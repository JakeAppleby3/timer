// alarm clock timer that will beep after a specified time has passed
// Edge case 1: If no numbers provided. The program should not beep at all and end since no beeps are scehduled
// Edge case 2: An input is an negative number. Ignore any numbers that are negative. CAn't scedule any numbes thaat are in the past.
// Edge case 3 : An input is not an number. Ignore this because any attempt to use settimout with anon number.

const input = process.argv
  .slice(2) // method used to slice to the third index
  .filter(time => !isNaN(time)) // Edge case to see if the value passed to the arguement time is not a number  
  .filter(time => time >=  0); //Edge case to see if the time is less than 0 which indicates a negative number, also checks to see if the value is zero

input.forEach((time) => { // for each method to loop through function 
  setTimeout(() => { //timer function to process '.' the process goes through every loop for one second to see if needs to print a beep
    process.stdout.write('.');
  }, time * 1000); // checks time for every one second or 1000 milliseconds
});