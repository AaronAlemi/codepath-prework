# Pre-work - *5 Button Simon Says*

**5 Button Simon Says** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Aaron Alemi**

Time spent: **35** hours spent in total

Link to project: (https://glitch.com/edit/#!/crocus-nonstop-sprite?path=README.md%3A1%3A0)

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [X] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [X] Choosing incorrectly will create an alert that lets the user know how many chances they have left
- [X] The timer starts with 5 seconds, and resets every round along with adding an additional second per round to compensate for the additional time needed to input more choices
- [X] Pressing buttons will not cause you to drag the image that displays on them, allowing for a more smooth user experience

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
[https://recordit.co/D2ijxJDF0G](https://recordit.co/D2ijxJDF0G) Demonstrates button functionality
![](https://recordit.co/48GyVLm0vH) Full game demonstrations
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
- https://stackoverflow.com/
- https://developer.mozilla.org/en-US/
- https://www.dofactory.com/
- https://www.w3schools.com/
- https://www.youtube.com/

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
- One challenge that I faced when creating this submission was hiding the elements in HTML. I first encountered this issue when following the tutorial to create the start and stop buttons. The tutorial suggested hiding the buttons by setting “hidden” as their class, which I did do, but then quickly found out that it wasn’t quite having the intended effect of hiding the buttons. I did some research and looked into the matter a bit, before eventually deciding that I needed to find a completely different approach if I wanted to hide the elements successfully. Soon after looking around on dofactory.com, I discovered that by setting hidden as an attribute of the element rather than its class, I would be able to hide the buttons in the intended way. And whenever I wanted to change the corresponding status of each button from hidden to visible, all I needed to do was replace the code that set the class to hidden with code that set and removed the hidden attribute from the element in HTML. This way, I was able to only show either the start or stop button at a time depending on whether or not the game was actually running.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
- One question about web development I have after this is how all of the different major components (front-end, back-end, and database) interact with each other. In my experiences so far, I’ve worked with each of these three individually, but not yet altogether combined into one singular project. My university studies so far have mostly focused on writing backend code with languages such as Java and C++. In addition, my databases course has focused on writing databases individually, but has not covered how to implement one in a large scale programming project. When it comes to this pre-work assignment, there was a front-end focus when it came to designing the layout of the site and styling the buttons and text, along with a back-end component as Javascript handled the logic of the game. What I would like to learn more about is how those two components are able to communicate with each other, as well as how a database could be implemented in this as well along with how said database would subsequently communicate with both the front-end and the back-end components.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
- If I had a few more hours to work on this project, I would go back and try to make the code a bit more organized. It still contains some default code and comments from when you open a project on glitch that serve no major purpose to where the project is at now. In addition, some things that were added when following the tutorial for the basic light and sound memory game were eventually replaced by other bits of code when completing the optional features. For example, the startTone() and stopTone() functions no longer serve any purpose since custom audio was added, and a separate function was created for playing that instead. In addition to these clean-ups to the code, I also noticed a bug that occurrs when you stop the game while a sequence is currently playing that doesn't properly reset the timer. With additional time, I would go back into the code and patch this to create a better user experience.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [Aaron Alemi]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
