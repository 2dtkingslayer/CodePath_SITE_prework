# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **TRUONG DUC DANG**

Time spent: **12** hours spent in total

Link to project: https://glitch.com/edit/#!/different-catkin-termite?path=style.css%3A183%3A20

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked
* [x] Game buttons each light up and play a sound when clicked
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [x] Buttons use a pitch (frequency) other than the ones in the tutorial
* [x] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [x] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Change the volume by sliding at anytime of the game

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
<img src="https://i.imgur.com/YRMx54Q.gif">
<img src="https://i.imgur.com/JSujIrr.gif">
![](gif3-link-here)
![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

N/A

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I met two difficulties in this project at first but actually, in my opinion, they are not extreme challenges. I am not getting use to integrating JavaScript file with HTML/CSS so the syntax took me a few more time to figure out. However, thanks to the detail instruction of the prework and a minor research on Google, I found it simple for me. I even use two more getElementbyID and innerHTML command lines to add the "Time remaining" line and the "Mistakes allowed" line. Furthermore, I met difficulty in setting the timer right after a sequence of clue was completely illustrated. Once again, I did a research about setTimeout() and the logical method after each step/button, I did it right.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Actually I have learned about HTML/CSS before so I do not really have any question after my submission. However, I am a music guy and also planning a music app project in the near future, I have raised some intriguing questions about the front-end of the web and how to enlarge the sound button scale. For instance, I wonder how to completely build a front-end for an organ or piano (in my current submission, I have built an octave instead 8 octaves for a piano). Secondly, I wonder whether it is possible to connect the buttons with my computer's buttons. The answer could absolutely be "Yes" because I did try some online piano game but I have to double check how to do it. And finally, "Is it allowed to play multiple notes a time?" Obviously, I will then figure out all of these questions and upgrade this submission.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I still have one uncomplete optional requirement (Game button sound is more complex than a single tone); therefore, I will try to figure it out if I have more time on this project. And this problem requires me to answer the last question which I raised above: "Is it allowed to play multiple notes a time?". Moreover, I will learn how to import an audio file to JavaScript and display it on HTML. Furthermore, I will create database and save players' score to disk so it becomes a full-stack web application. Finally, I want to save the notes/sheet of many song I like so that I sister can learn to play piano with my web application.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright Truong Duc Dang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
