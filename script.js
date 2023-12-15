function jump() {
  const mario = document.querySelector(".mario");
  mario.classList.add("jump");
  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
}

document.addEventListener("keydown", jump);
