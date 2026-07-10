// =========================
// كتابة العنوان
// =========================

const text = "إلى أجمل بنت في حياتي";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,80);

    }

}

typeWriter();


// =========================
// عداد الحب
// =========================

const startDate = new Date("2025-10-06T00:00:00");

function updateTimer(){

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff/(1000*60*60*24));

    const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

    const minutes = Math.floor((diff%(1000*60*60))/(1000*60));

    const seconds = Math.floor((diff%(1000*60))/1000);

    document.getElementById("timer").innerHTML=`
        ❤️ ${days} يوم <br>
        🕒 ${hours} ساعة <br>
        ⏰ ${minutes} دقيقة <br>
        💞 ${seconds} ثانية
    `;

}

updateTimer();

setInterval(updateTimer,1000);


// =========================
// ظهور الأقسام
// =========================

const sections=document.querySelectorAll("section");

function reveal(){

    sections.forEach(section=>{

        const top=section.getBoundingClientRect().top;

        if(top<window.innerHeight-100){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",reveal);

reveal();


// =========================
// زر الأغنية (هنوصله بعدين)
// =========================

const button=document.querySelector(".music button");

button.onclick=function(){

    alert("بعد شوية هنضيف أغنية عامر منيب ❤️");

}
// =========================
// معرض الصور
// =========================

const images=[

"images/1.jpg",

"images/2.jpg",

];

let current=0;

document.getElementById("total").innerHTML=images.length;

function changeImage(){

document.getElementById("galleryImage").src=images[current];

document.getElementById("current").innerHTML=current+1;

}

document.getElementById("next").onclick=function(){

current++;

if(current>=images.length){

current=0;

}

changeImage();

}

document.getElementById("prev").onclick=function(){

current--;

if(current<0){

current=images.length-1;

}

changeImage();

}
// ==========================
// Video Slider
// ==========================

const videos = [
    "video/1.mp4",
    "video/2.mp4",
    "video/3.mp4",
    "video/4.mp4"
];

let currentVideo = 0;

document.getElementById("videoTotal").innerHTML = videos.length;

function changeVideo(){

    const video = document.getElementById("loveVideo");

    const source = document.getElementById("videoSource");

    source.src = videos[currentVideo];

    video.load();

    document.getElementById("videoCurrent").innerHTML = currentVideo + 1;

}

document.getElementById("nextVideo").onclick = function(){

    currentVideo++;

    if(currentVideo >= videos.length){

        currentVideo = 0;

    }

    changeVideo();

}

document.getElementById("prevVideo").onclick = function(){

    currentVideo--;

    if(currentVideo < 0){

        currentVideo = videos.length - 1;

    }

    changeVideo();

}
window.addEventListener("load", function () {

    const music = document.querySelector("audio");

    if(music){

        music.volume = 0.5; // مستوى الصوت 50%

        music.play().catch(function(){});

    }

});