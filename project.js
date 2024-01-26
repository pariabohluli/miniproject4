let hour = document.querySelector('.hour');
let min = document.querySelector('.min');
let sec = document.querySelector('.sec');
let deg = 6;

setInterval(clockHandler, 1000);
function clockHandler(){
    //sec.style.transform = `rotateZ(${deg}deg)`;
    //deg += 6;
    let d = new Date();
    let h = d.getHours() * 30;
    let m = d.getMinutes() * deg;
    let s = d.getSeconds() * deg;

    hour.style.transform = `rotateZ(${h + (m/12)}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;
}