const heartsContainer = document.querySelector('.hearts');

function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');

  
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
  balloon.style.animationDuration = (4 + Math.random() * 3) + 's';

  heartsContainer.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 7000);
}
const music = document.getElementById('flowerMusic');
if(localStorage.getItem('musicPlaying') === 'true'){
  music.play();
} else {
  music.pause();
}


setInterval(createBalloon, 400);
