const carousel =[...document.querySelectorAll('.carousel img')];

let carouselImageIdex = 0;

const changecarousel =()=>{
    carousel[carouselImageIdex].classList.toggle('active');
    if(carouselImageIdex>=carousel.length-1){
        carouselImageIdex=0;
    }
    else{
        carouselImageIdex++;
    }
    carousel[carouselImageIdex].classList.toggle('active');
}

setInterval(()=>{
     changecarousel();
},3000);

const musicplayersection = document.querySelector('.music-player-section');
let clickcount =1;
musicplayersection.addEventListener('click',()=>{
    if(clickcount>=2){
        musicplayersection.classList.add('active');
        clickcount=1;
        return;
    }
    clickcount++;
    setTimeout(()=>{
        clickcount=1;
    },250);
})


const backtohomebtn=document.querySelector('/music-player-section .back-btn');
backtohomebtn.addEventListener('click',()=>{
    musicplayersection.classList.remove('active');
})

const playlistsection= document.querySelector('.playlist');
const navbtn=document.querySelector('.music-player-section .nav-btn');

navbtn.addEventListener('click',()=>{
    playlistsection.classList.add('active');
})

const backtomusicplayer=document.querySelector('.playlist .back-btn');
backtomusicplayer.addEventListener('click',()=>{
    playlistsection.classList.remove('active');
})

let currentmusic =0;

const mudic=document.querySelector('#audio-source');
const seekbar = document.querySelector('.music-seek-bar');
const songname = document.querySelector('.current-song-name');
const artistname =document.querySelector('.artist');
const coverimage = document.querySelector('.cover');
const currentmusictime =document.querySelector('.current-time');
const musicduration = document.querySelector('.duration');

const forwardbtn = document.querySelector('i.fa-forward');
const backwardbtn = document.querySelector('i.fa-backward');
const playbtn = document.querySelector('i.fa-play');
const pausebtn = document.querySelector('i.fa-pause');
const repeatbtn = document.querySelector('span.fa-redo');
const volumebtn = document.querySelector('span.fa-volume-up');
const volumeslider = document.querySelector('.volume-slider');

playbtn.addEventListener('clidk',()=>{
    music.play();
    playbtn.classList.remove('active');
    pausebtn.classList.add('active');
})

pausebtn.addEventListener('clidk',()=>{
    music.pause();
    pausebtn.classList.remove('active');
    playbtn.classList.add('active');
})

const setmusic =(i)=>{
    seekbar.value =0;
    let songs =songs[i];
    currentmusic=i;

    musicduration.src = song.path;

    songname.innerHTML -song.name;
    artistname.innerHTML = song.artist;
    coverimage.src = song.cover;

    setTimeout(() => {
        seekbar.max = music.duration;
        musicduration.innerHTML =formattime(music.duration);
    },300);
    currentmusic.innerHTML = '00:00';

}

setmusic(0);

const formattime = (time) =>{
    let min =math.floor(timr/60);
    if(min<10){
        min = '0' +min;
    }
    let sec = math.floor(TIME%60);
    if(sec<10){
        sec = '0' + sec;
    }
    return '${min} : ${sec}';
}

