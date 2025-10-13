const music = document.getElementById("birthdayMusic");
const musicBtn = document.getElementById("musicBtn");
const confettiBtn = document.getElementById("confettiBtn");
const balloonBtn = document.getElementById("balloonBtn");
const heartsContainer = document.querySelector('.hearts');


musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸️ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "🎵 Play Music";
  }
});


function createConfetti() {
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor = `hsl(${Math.random()*360},70%,60%)`;
    confetti.style.animationDuration = (2 + Math.random()*3) + "s";
    document.body.appendChild(confetti);
    setTimeout(()=> confetti.remove(), 5000);
  }
}


function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = Math.random() * 100 + 'vw';
  balloon.style.backgroundColor = `hsl(${Math.random()*360},70%,80%)`;
  balloon.style.animationDuration = (4 + Math.random()*3)+'s';
  heartsContainer.appendChild(balloon);
  setTimeout(()=> balloon.remove(),7000);
}


window.addEventListener('load', () => {
  createConfetti();
  for(let i=0;i<15;i++) createBalloon();
  setInterval(createBalloon, 800);
});


confettiBtn.addEventListener("click", createConfetti);
balloonBtn.addEventListener("click", createBalloon);


setInterval(()=>{
  const heart = document.createElement('div');
  heart.classList.add('balloon');
  heart.style.left = Math.random()*100+'vw';
  heart.style.backgroundColor='rgba(255,182,193,0.7)';
  heartsContainer.appendChild(heart);
  setTimeout(()=>heart.remove(),7000);
},400);


const style = document.createElement('style');
style.innerHTML = `
.confetti {position:fixed;width:10px;height:10px;top:-10px;animation:fall linear forwards;z-index:9999;}
@keyframes fall{to{transform:translateY(100vh) rotate(720deg);}}
.balloon {position:absolute;bottom:-50px;width:30px;height:45px;border-radius:50% 50% 48% 48%;animation:float ease-in forwards;z-index:9998;}
.balloon::after{content:'';position:absolute;bottom:-20px;left:50%;transform:translateX(-50%);width:1px;height:20px;background:rgba(0,0,0,0.3);}
@keyframes float{to{transform:translateY(-110vh);}}
`;
document.head.appendChild(style);
