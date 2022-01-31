window.onload = () => {
    setButtons();
  }
  
  let beats = {
    "a": {
      beat: "./assets/download.mp3",
      color: "#00fffe"
    },
    "s": {
      beat: "./assets/1.mp3",
      color: "#00fffe"
    },
    "d": {
      beat: "./assets/2.mp3",
      color: "#00fffe"
    },
    "f": {
      beat: "./assets/3.mp3",
      color: "#FF00FF"
    },
    "g": {
      beat: "./assets/4.mp3",
      color: "#FF00FF"
    },
    "h": {
      beat: "./assets/5.mp3",
      color: "#FF00FF"
    },
    "j": {
      beat: "./assets/6.mp3",
      color: "#FF00FF"
    },
    "k": {
      beat: "./assets/7.mp3",
      color: "#FFFFFF"
    },
    "l": {
      beat: "./assets/8.mp3",
      color: "#FFFFFF"
    }
  }
  
  // #FF00FF
  const setButtons = () => {
    for(let beatKey in beats){
      let beat = beats[beatKey];
      let element = document.getElementById(beatKey);
      element.style.borderColor = beat.color;
      element.addEventListener("transitionend",  ()=>{
        element.style.backgroundColor = "transparent";
        element.style.boxShadow = "none";
      })
    }
  }
  
  const onButtonPress = (buttonKey) => {
    let element = document.getElementById(buttonKey);
    element.style.backgroundColor = beats[buttonKey].color;
    element.style.boxShadow = `0px 0px 17px 0px ${beats[buttonKey].color}`;
  }
  
  
  const playBeat = (buttonKey) => {
    let audioSrc = beats[buttonKey].beat;
    let audio = new Audio(audioSrc);
    audio.currentTime = 0;
    audio.play();
  }
  
  document.addEventListener('keydown', (event)=>{
    playBeat(event.key);
    onButtonPress(event.key);
  })