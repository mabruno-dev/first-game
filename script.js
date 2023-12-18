function jump() {
  const mario = document.querySelector(".mario");
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 700);
}

const loop = setInterval(() => {
  const clouds = document.querySelector(".clouds");
  const pipe = document.querySelector(".pipe");
  const mario = document.querySelector(".mario");
  const pipePosition = pipe.offsetLeft;
  const marioPosition = Number(
    window.getComputedStyle(mario).bottom.replace("px", "")
  );
  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;
    mario.src = "/imagens/game-over.png";
    mario.style.width = "70px";
    mario.style.marginLeft = "50px";

    clouds.style.left = "350px";
    clouds.style.top = "0px";
    clouds.src = "/imagens/gameOver.png";
    clouds.style.animation = "gameover 700ms infinite linear";
  }
}, 10);

document.addEventListener("keydown", jump);
