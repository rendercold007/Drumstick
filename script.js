script.js

const drumSounds = {
    A: "sounds/clap.wav",
    S: "sounds/snare.wav",
    D: "sounds/tom.wav",
    F: "sounds/hihat.wav",
    G: "sounds/ride.wav",
    H: "sounds/openhat.wav",
    J: "sounds/tink.wav",
    K: "sounds/boom.wav",
    L: "sounds/kick.wav"
  };
  
  function playSound(key) {
    const sound = drumSounds[key.toUpperCase()]; 
    if (sound) {
      const audio = new Audio(sound);
      audio.play();
  
      const button = document.querySelector(`button[data-key="${key.toUpperCase()}"]`);
      if (button) {
        button.classList.add("playing");
        setTimeout(() => button.classList.remove("playing"), 150);
      }
    }
  }
  
  document.addEventListener("keydown", (e) => {
    playSound(e.key);
  });
  
  document.querySelectorAll(".drum").forEach((button) => {
    button.addEventListener("click", () => {
      playSound(button.dataset.key);
    });
  });
  //vhvhv
  