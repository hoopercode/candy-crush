# 
## The second largest heading
###### The smallest heading


# Candy Crush - A Javascript Game by Rob Hooper

## Project Brief

Put everything you’ve learned in your first 3 weeks to the test by designing and building your own full functioning browser based game using HTML, CSS/SCSS and
JavaScript.

## Pseudo-Code - Candy Crush

* * 8x8 Grid that has either colors or symbols

- This seems like the easiest part of the challenge.  Could just be a simple make up of 64 div that are all allocated a spot on a grid? Seems like a lot of divs to create on a page and a lot of repetitive code.  

- Could possibly look into using JS to repeat this process.  (Thinking createElement() and styling them all at once).  

- Grid might cause an issue because I will have to reallocate the grid locations using JS.  This seems tricky.  Maybe flex wrap and push boxes onto the next line?
Link to flex wrap

* * Ability to drag colors or symbols to the box next to them

- I don’t know anything about drag functions so I will have to research how these work.  

- This seems like a good place to start

- Note: To make an element draggable, use the global HTML5 draggable attribute.
- Tip: Links and images are draggable by default, and do not need the draggable attribute.

- Events fired on the draggable target (the source element):
- ondragstart - occurs when the user starts to drag an element
- ondrag - occurs when an element is being dragged
- ondragend - occurs when the user has finished dragging the element

- Events fired on the drop target:
- ondragenter - occurs when the dragged element enters the drop target
- ondragover - occurs when the dragged element is over the drop target
- ondragleave - occurs when the dragged element leaves the drop target
- ondrop - occurs when the dragged element is dropped on the drop target


##Note:  A huge amount of learning is involved in these things.

* * When dropping the boxes the game needs to know whether or not it is allowed to drop it in that certain place.  

- For this game I am only going to allow it to move one column to the right or left (as long as it's on the same row) and one entire row up or down.  

- I’m imagining that this is going to look something like box id+1 id-1 or id+8 id-8.

- Remember that ID’s will be strings so make sure to parseInt them to numbers.

- What happens in a for loop when there is no i++ that I’m referring to but it doesn’t exist, like at the bottom of the grid? Will have to adjust the for loop numbers to tackle that, won’t be as simple as i < 64 because 64 will be too many.

- Most important event seems to be the drop event where all the info will need to be exchanged.

* * Boxes need to be able to take switch the color of the box next to them once they have taken their place and vice versa

Guessing that will take place in the drop event.  Drop gives us access the the element being dropped so I will just have to pick up the color from there and associate it to a blank variable for the period of that function and vice versa.  Guessing I will have to pick up the color and ID of the initial square at DragStart.


* * Boxes need to disappear when rows or columns of 3 or 4 have been made
For each???
For loop???

I’m guessing I will have to loop over all the boxes and see if the colors that have the id’s with valid numbers (-1, +1, -8, +8) have the matching colors and if they do, I will change their color to “”.  Only thing is they will still be there.  Issue.


* * Score needs to increase by 3 or 4 when rows/columns of 3 or 4 have been made
No rows/columns of 3 or 4 on the start.
Guessing that will be an easy bit where if the loop is successful it will be as simple as adding that in with a DOM manipulation to a text box somewhere on the page listing the score.

* * Ability to reset the game
This is going to be a tricky bit if I choose to use create elements.  I don’t know how to undo create elements but I’m sure there is a way.

Looks like going “grid.innerHTML = “”;” clears ANY html elements inside my main grid so that will work.


High Score shown for multiple tries.
No idea how to do this.  Does it get stored locally?



#My New Learning

const square = document.createElement('div');

I had never used this syntax before.  It was great for getting the grid made.  Saved a lot of time.  Before appending it to the div I was able to style it.  Very cool use of JS.  Repeated this 64 times.

grid.appendChild(square) //Talk about this

I had tried to use this quite a lot but had never really had success.  It was so good to use it and have success. Super easy.

square.setAttribute('draggable', true) //Talk about this

I had never seen this before so thought it was worth mentioning.  This just makes the item draggable or not. When clicked and dragged a little green + sign pops up with the drag.

All the drag functions

These were all new to me so that took up a lot of my time.  Learning about the different events/functions/defaults that were possible.  Took a while to get my head around the difference between drop and dragEnd (they seemed the same).  Had a big breakthrough when I read “​​A drop event is fired from the drop target, A dragend event is fired from the source of the drag”

window.setInterval(function() 

This is a cool function that lets tells the window to complete whatever function you’d like at a certain interval.  In my case, I needed the window to constantly look for scoring points in the grid.  I had all my scoring functions inside this function.

setTimeout(function()

Although we had learned about these earlier in the week, this hadn’t really sunk in so it was good to use.  I had an issue where I was trying to set the score to 0 to start the game but because the game often started with winning combinations, the score would increase without the player actually doing anything.





