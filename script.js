console.log("WELCOME TO SPOTIFY");

//initialize the variables
let songindex=0;
let audioElement= new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar= document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let masterSongPlay=document.getElementById('masterSongPlay');
let songsItem= Array.from(document.getElementsByClassName('songsItem'));

let songs =[
    {songName:" LET ME LOVE YOU",  filePath:"songs/1.mp3",coverPath:"cover/3.jpg"},
    {songName:"MAAN MERI JAAN",   filePath:"song /2.mp3",coverPath:"cover/2.jpg"},
    {songName:"ANIMALS-MAROON",    filePath:"song/3.mp3",coverPath:"cover/4.png"},
    {songName:"FIKAR NOT",         filePath:"song/4.mp3",coverPath:"cover/1.webp"},
    {songName:"WOH DIN",            filePath:"song/5.mp3",coverPath:"cover/1.webp"},
    {songName:"Khairiyat (Happy) ", filePath:"song/6.mp3",coverPath:"cover/1.webp"},
]

songsItem.forEach((element,i) => {
    console.log(element,i);
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innertext=songs[i].songName;
})
  
// audioElement.play();

// Handle play/pause click 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity=0;
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate',()=>{
 // update seekbar
 progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
 console.log(progress);
 myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100; 
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach(element => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');

})
} 

Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeAllPlays();
    songindex= parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    audioElement.src =`songs/${songindex+1}.mp3`;
    masterSongPlay.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if (songindex>=6) {
        songindex=0
    }
    else{
        songindex +=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongPlay.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if (songindex<=6) {
        songindex=0
    }
    else{
        songindex -=1;
    }
    audioElement.src = `songs/${songindex+1}.mp3`;
    masterSongPlay.innerText=songs[songindex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
})