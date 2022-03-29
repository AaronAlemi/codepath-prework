/*
This is your site JavaScript code - you can add interactivity and carry out processing
- Initially the JS writes a message to the console, and moves a button you can add from the README
*/

// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
//console.log("Hello 🌎");

/* 
Make the "Click me!" button move when the visitor clicks it:
- First add the button to the page by following the "Next steps" in the README
*/
//const btn = document.querySelector("button"); // Get the button from the page
// Detect clicks on the button
/*if (btn) {
  btn.onclick = function() {
    // The JS works in conjunction with the 'dipped' code in style.css
    btn.classList.toggle("dipped");
  };
} */

/*(if (button1) {
  button1.onclick = function() {
    button1.classList.toggle("hidden");
  }
}*/

function getRandomInt(max) {
  return Math.floor(Math.random() * max) + 1;
}

// global constants
//const clueHoldTime = 1000; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [getRandomInt(5), getRandomInt(5), getRandomInt(5), getRandomInt(5), getRandomInt(5), getRandomInt(5), getRandomInt(5), getRandomInt(5)];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var mistakeCounter = 0;
var clueHoldTime = 1000; //how long to hold each clue's light/sound


function startGame(){
    //initialize game variables
    progress = 0;
    clueHoldTime = 1000; //how long to hold each clue's light/sound
    pattern = [getRandomInt(5), getRandomInt(5), getRandomInt(5), getRandomInt(5), getRandomInt(5), getRandomInt(5), getRandomInt(5), getRandomInt(5)];
    mistakeCounter = 0;
    gamePlaying = true;
  
    // swap the Start and Stop buttons
    document.getElementById("startBtn").setAttribute("hidden", "");
    document.getElementById("stopBtn").removeAttribute("hidden");
    //document.getElementById("stopBtn").classList.remove('hidden');
    playClueSequence();
}

function stopGame(){
    gamePlaying = false;
    clearInterval(myInterval);
    document.getElementById("startBtn").removeAttribute("hidden");
    document.getElementById("stopBtn").setAttribute("hidden", "");
  
}



function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    // playTone(btn,clueHoldTime);
    switch (btn) { // Plays corresponding sound when guessing
      case 1:
        playAudio1();
        break;
      case 2:
        playAudio2();
        break;
      case 3:
        playAudio3();
        break;
      case 4:
        playAudio4();
        break;
      case 5:
        playAudio5();
        break;
      default:
        playAudio1();
        break;
    }
    if (gamePlaying) {
      setTimeout(clearButton,clueHoldTime,btn);
    }
    
  }
}

let time = 5;
let myInterval;

function playClueSequence(){
  context.resume()
  guessCounter = 0;
  clueHoldTime = clueHoldTime - 100;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  time = 5 + progress;
  setTimeout(() => {myInterval = setInterval(updateCountDown, 1000)}, delay);
  
}


function guess(btn){
  
  if(!gamePlaying){
    console.log("user guessed: " + btn);
    return;
  }
  if (btn == pattern[guessCounter]) {
    console.log("user guessed: " + btn);
    if (guessCounter == progress) {
      
      if (progress == pattern.length - 1) {
          winGame();
      }
      else {
        clearInterval(myInterval);
        progress++;
        playClueSequence();
      }
      
    }
    else {
      guessCounter++;
      
    }
  }
  else {
    console.log("user guessed: " + btn + " INCORRECT");
    if (mistakeCounter < 2) {
      mistakeCounter++;
      var chancesLeft = 3-mistakeCounter;
      if (chancesLeft == 1) {
        alert("Wrong choice. " + chancesLeft + " chance left");
      }
      else {
        alert("Wrong choice. " + chancesLeft + " chances left");
      }
      
    }
    else {
      loseGame();
    }
    
  }

}


function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function timeOut() {
  stopGame();
  alert("Time's up! You lost.");
  
}

function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Game Over. You won!");
}


// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 500
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}


// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)




function toggleImage(){
  document.querySelector('#image').classList.toggle('hidden');
}

function playMyAudio(audio){
      document.getElementById(audio.id).play();
      //document.getElementById("audioStatus").innerHTML="Audio is Playing";	 
}

function pauseMyAudio(audio){
   document.getElementById(audio.id).pause();
   //document.getElementById("audioStatus").innerHTML="Audio Paused";	
}

function playAudio1(){
       document.getElementById("Audio1").play();
     }
function pauseAudio1(){
   document.getElementById("Audio1").pause();
   //document.getElementById("audioStatus").innerHTML="Audio Paused";	
}

function playAudio2(){
       document.getElementById("Audio2").play();
     }
function pauseAudio2(){
   document.getElementById("Audio2").pause();
   //document.getElementById("audioStatus").innerHTML="Audio Paused";	
}

function playAudio3(){
       document.getElementById("Audio3").play();
     }
function pauseAudio3(){
   document.getElementById("Audio3").pause();
   //document.getElementById("audioStatus").innerHTML="Audio Paused";	
}

function playAudio4(){
       document.getElementById("Audio4").play();
     }
function pauseAudio4(){
   document.getElementById("Audio4").pause();
   //document.getElementById("audioStatus").innerHTML="Audio Paused";	
}

function playAudio5(){
       document.getElementById("Audio5").play();
     }
function pauseAudio5(){
   document.getElementById("Audio5").pause();
   //document.getElementById("audioStatus").innerHTML="Audio Paused";	
}

function showGreen() {
  document.getElementById("greenPaint").removeAttribute("hidden");
}
function hideGreen() {
  document.getElementById("greenPaint").setAttribute("hidden", "");
}

function showBlue() {
  document.getElementById("bluePaint").removeAttribute("hidden");
}
function hideBlue() {
  document.getElementById("bluePaint").setAttribute("hidden", "");
}

function showRed() {
  document.getElementById("redPaint").removeAttribute("hidden");
}
function hideRed() {
  document.getElementById("redPaint").setAttribute("hidden", "");
}

function showYellow() {
  document.getElementById("yellowPaint").removeAttribute("hidden");
}
function hideYellow() {
  document.getElementById("yellowPaint").setAttribute("hidden", "");
}

function showPurple() {
  document.getElementById("purplePaint").removeAttribute("hidden");
}
function hidePurple() {
  document.getElementById("purplePaint").setAttribute("hidden", "");
}

//const startingMinutes = 10;


const countDownElement = document.getElementById('timer');

//setInterval(updateCountDown, 1000);

function updateCountDown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;
  
  seconds = seconds < 10 ? '0' + seconds : seconds;
  
  countDownElement.innerHTML = `${minutes}:${seconds}`;
  time--;
  time = time < 0 ? 0 : time;
  
  if (seconds == 0) {
    if (gamePlaying) {
       clearInterval(myInterval);
       timeOut();
    }
    
  }
  
}











// This is a single line JS comment
/*
This is a comment that can span multiple lines 
- use comments to make your own notes!
*/
