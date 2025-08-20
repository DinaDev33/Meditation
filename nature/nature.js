const button = document.querySelector("#buttonNatureAudio");
const audio = document.querySelector("#player");

button.addEventListener("click", function () {

  if (audio.paused) {
   audio.play();
   this.textContent = 'PAUSE MUSIC';
 } else {
   audio.pause();
   this.textContent = 'PLAY MUSIC';
 }
});

const buttonTwo = document.querySelector("#buttonNatureVideo");
const video = document.querySelector("#videoPlayer");

 buttonTwo.addEventListener("click", function() {
  if (video.paused) {
    video.play();
    this.textContent = 'PAUSE VIDEO';
  } else {
    video.pause();
    this.textContent = 'PLAY VIDEO';
  }
});

if (window.innerWidth <= 500) {
  video.autoplay = false;
  video.load();
}
  const timer = 1;
let amountTime = timer * 60;

function calculateTime() {
  const countDown = document.querySelector('#countdown');
  let minutes = Math.floor(amountTime / 60);
  let seconds = amountTime % 60;

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  countDown.textContent = `${minutes} : ${seconds}`;
  amountTime--;

  if (amountTime < 0) {
    stopTimer();
    amountTime = 0;
    audio.pause();
    button.textContent = 'PLAY MUSIC';
  }


function stopTimer() {
  clearInterval(timerId);
}
}

 let timerId = setInterval(calculateTime, 1000);
  
