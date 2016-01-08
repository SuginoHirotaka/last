var player = document.querySelector("audio");
player.addEventListener("play", hello);
player.addEventListener("pause", goodbye);

window.addEventListener("load", initialize);
function initialize(event){
   pauseButton.hidden = true;
   volumenControl.value = 1;
   seekbar.max = player.duration;
}

var playButton = document.querySelector("#playButton");
playButton.addEventListener("click", playMusic);
function playMusic(event){
   player.play();
   pauseButton.hidden = false;
   playButton.hidden = true;
}

var pauseButton = document.querySelector("#pauseButton");
pauseButton.addEventListener("click", pauseMusic);
function pauseMusic(event){
   player.pause();
　 pauseButton.hidden = true;
   playButton.hidden = false;
}


function hello(event){
  console.log("hello");
  console.log(event);
}

function goodbye(event){
   console.log("goddbye");
}

var skipButton = document.querySelector("#skipButton");
skipButton.addEventListener("click", skip10sec);
function skip10sec(event){
   player.currentTime = player.currentTime + 10;
}

var backButton = document.querySelector("#backButton");
backButton.addEventListener("click", back10sec);
function back10sec(event){
   player.currentTime = player.currentTime - 10;
}

var volumenControl = document.querySelector("#volumeControl");
volumeControl.addEventListener("change", changeVolume);
function changeVolume(event){
  player.volume = volumenControl.value;
}

var seeknbar = document.querySelector("#seekbar");
seekbar.addEventListener("change", changeseek);
function changeseek(event){
  player.currentTime = seekbar.value;
}

function updateseek(event){
  seekbar.value = player.currentTime;
}
