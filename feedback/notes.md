# Feedback

## Goals

1. A working Game - done

   - 110% It is sick, so many challenging features you have added and have got them to work in the game.
   - Dragging, Vertical, Horizontal matches

2. Practice using Git & Github-flow - done

   - 110% 5 Branches, 34 commits

3. Apply what you are learning - done

   - SCSS, BEM , functions , loops etc.... So much good stuff

## Specification

- PSEUDOCODE - done

  - I can see your thought process in your readme.md. Good problem solving / breakdown. Keep it up!

  - Github repo & README.MD - done

  - Repo has been set up perfect
  - Readme is great, I would suggest adding a couple of things.
    - How do you clone it and set it up?
    - the link to the live site?

- 25 Commits - done

- Use click or key press event in JS - done

- Mobile first/Responsive - done

- No tutorials - done

- Link to the project on your portfolio - not sure.

## Overall

This is a great game, lots of difficult things to check / consider in breaking the game down. I like your readme is almost self documenting / notes for you to come back to you. In terms of the game it is awesome, I like the blocks gives a old school vibe. You are using js to generate everything why write it when js can do it for you. It has been interesting looking how you added the drag functionality to the project.

The animations / styles are great. You can see that you have taken everything we have learned so far and put it into this project. Well everything but testing :P.

## To work on

There isn't much more to do, in my opinion these should be things to focus on if you have the time.

One feature you should consider adding is as you clear more appear. So it is endless?

Personally I am not a fan of `function()` as you can use functions before you have defined them. So in your code you are assigning eventlisteners before you have written the functions. Which in my opinion doesn't read well. If you use `() => {}` arrow functions it stops this behavior. This is a opinion though so don't feel like you have to change it.

### House keeping

- lightyellow should be lightYellow
- remove console.log()
- Refactor your `forEach()`, you can do it all with one pass or the array.

  ```js
  //47 -51
  squares.forEach(square => square.addEventListener("dragstart", dragStart));
  squares.forEach(square => square.addEventListener("dragend", dragEnd));
  squares.forEach(square => square.addEventListener("dragover", dragOver));
  squares.forEach(square => square.addEventListener("dragenter", dragEnter));
  squares.forEach(square => square.addEventListener("drop", dragDrop));
  ```

  ```js
  squares.forEach(square => {
    square.addEventListener("dragstart", dragStart);
    square.addEventListener("dragend", dragEnd);
    square.addEventListener("dragover", dragOver);
    square.addEventListener("dragenter", dragEnter);
    square.addEventListener("drop", dragDrop);
  });
  ```

  ## Pure Functions

  In terms of unit testing this game at the moment isn't unit testable as the functions do not return anything. I think if you were to try and implement this in this project you would have to refactor it completely. It is something to bear in mind when you go onto the next project. Code that is testable is more robust.

---
