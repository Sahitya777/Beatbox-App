
let beats={
    "a":"/assets/download.mp3",
    "s":"/assets/1.mp3",
    "d":"/assets/2.mp3",
    "f":"/assets/3.mp3",
    "g":"/assets/4.mp3",
    "h":"/assets/5.mp3",
    "j":"/assets/6.mp3",
    "k":"/assets/7.mp3",
    "l":"/assets/8.mp3",
}

const playbeat=(buttonkey)=>{
    let audiosrc=beats[buttonkey];
    let audio=new Audio(audiosrc);
    audio.currentTime=0;
    audio.play();
    
}


document.addEventListener('keydown',(event)=>{
    console.log(event.key);
    playbeat(event.key);
});