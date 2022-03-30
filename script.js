// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 1;  //must be between 0.0 and 1.0
var guessCounter = 0;

function startGame(){
  for (let i = 0; i < 13; i++) pattern[i] = Math.round(Math.random() * 13);
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence();
}

function stopGame(){
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {1: 261.626, 2: 294.33, 3: 327.03, 4: 348.83, 5: 392.44, 6: 436.04, 7: 490.55, 8: 523.25, 9: 277.18, 10: 311.13, 11: 369.994, 12: 415.30, 13: 466.16}
function playTone(btn , len){
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){stopTone()},len) //will stopTone() after len (seconds)
}
function startTone(btn){
  if(tonePlaying == false){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0, context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button" + btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button" + btn).classList.remove("lit")
}

function playSingleClue(btn){
  if ( gamePlaying ){
    lightButton(btn);
    playTone(btn , clueHoldTime);
    setTimeout(clearButton , clueHoldTime , btn); //clearButton(btn) after clueHoldTime (mili-seconds)
  }
}
function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; // set delay to initial wait time
  for(let i = 0; i <= progress; i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}
function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if (!gamePlaying){
    return;
  }
  if (pattern[guessCounter] == btn){ // Guess was correct!
    if (guessCounter == progress){ // Last note of the current turn
      if (progress == pattern.length - 1){ // GAME OVER: WIN!
        winGame();
      } else { // Not yet
        progress++;
        playClueSequence();
      }
    } else {
      //so far so good... check the next guess
      guessCounter++;
    }
  } else { // Guess was incorrect
    loseGame(); // GAME OVER: LOSE!
  }
}