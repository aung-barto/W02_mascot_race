#MASCOT RACE
##Contributors are Aung Barteaux , Julie Kwok and Andy Tomlinson

####To create the Mascot Race:

1) We created a constructor function called Mascot which had three 'key = value pairs' as described in the task. This included name, food and endurance for three mascots

2) We then set this up to be able generate new objects by having a placeholder 'this.' before each pair.

3)  We created a method called run 'this.run = function()' to return a distance covered. This works for each mascot by calculating 'Math.floor(Math.random())' and multiplying it by 'this.endurance'

4) The three mascots instances were then created which can drop into the construction function using var 'mascot name' = new Mascot ("","", ...)

5) Next we had to create the race itself using a function and while combination. The race function has four paremeters (race_distance, which just created as a variable, then three parameters which we will subsitute for our mascots when we call the function). Above this we defined a race_distance variable, and then set each of the mascots' 'distance_left' to equal race_distance. This allows us to track the distance left for each mascot as... it runs through a while loop.

6) Because we don't know how many times the race will need to run before the mascots complete the distance we used a while loop that works while (the distance left for each mascot > 0). Assuming this is true, .run() method is called and subtracted from the distance_left for each mascot. This is then console logged with a message explaining how many metres each mascot has run and how many they have left (using appropriate concatenation).

7) The while loop runs until one of the mascots has finished at which point we used several if ... else statements to figure out which mascot had come finished, if two had finished then which had finished 'better', or if there been a tie. These are each attached to the appropriate console.log statement.

:sunglasses: Finally we call our race() function, substituting the names of the mascots in for the three parameters

####BONUS

9) For the bonus, we added a tripping key-value pair into the constructor function. Beneath that, we added a trip function to generate a random number from 1-10.

10) To each of the mascots, we added a value for tripping. Lindsey and Mark have a value of 0 since they are not destined to trip. We chose Randy, the player with the highest endurance to make the game more interesting.

11) He had a value of ten so that we could add an if statement into the race function. For numbers 1-3, he is destined to trip. Therefore, he can’t advance any meters and his progress is moved to the else statement when he runs.

12) When he trips, we added a statement to announce it happened.