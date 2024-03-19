
const startBtn=document.getElementById('start-btn'); //select btns and img
const stopBtn=document.getElementById('stop-btn');
const memeImg=document.getElementById('meme-img');



async function fetchmeme(){ //fun to get meme from api
    try{
        const res=await fetch("https://api.imgflip.com/get_memes"); //fetch from this apilink(await till vha sa fetched before proceeding)
        const data=await res.json(); //gets json format of fetched api(also awaits)
        return data.data.memes; //gets memes array from json(The data object contains a property named data, which itself contains a property named memes-read from imgflip api)
    }
    catch(error){
        console.log("error");
        return [];
    }
}
let intervalId;

const startmeme=function(){ //fun to start meme generation
  

  intervalId=setInterval(async()=>{ // fun to generate meme after every 1 sec
    const memes=await fetchmeme(); //fetch memes from fun
    const random_meme=Math.floor(Math.random()*memes.length); //select random meme from fetched memes
    memeImg.src=memes[random_meme].url; //memeimg in html ka srcpt ye random meme generated ka url rkdo
  },400)
}

const  stopmeme=function(){ //fun to stop meme generation
    
     clearInterval(intervalId); //clear interval to stop generating memes
}
startBtn.addEventListener('click',startmeme); //on click event on start btn execute startmeme fun
stopBtn.addEventListener('click',stopmeme); //on click event on stop btn execute stopmeme fun