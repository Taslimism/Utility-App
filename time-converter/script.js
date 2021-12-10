const humanReadable = document.querySelector('#human-readable');
const secs = document.querySelector('#sentence');
const epoch = document.querySelector('#epoch')
const year = document.querySelector('.year');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const min = document.querySelector('.min');
const hr = document.querySelector('.hour');
const sec = document.querySelector('.sec');
const currentTime = document.querySelector('.epoch');

humanReadable.addEventListener('click', () => {
    let date = new Date(secs.value * 1000);
    console.log(date.getFullYear());
    const arr = date.toString('ascii');
    const datee = arr.split(' ');
    let [hour, minute, seconds] = datee[4].split(':');
    hr.value = hour;
    min.value = minute;
    sec.value = seconds;
    month.value = date.getMonth() + 1;
    year.value = datee[3];
    day.value = datee[2];
})
epoch.addEventListener('click', () => {
    const mon = month.value;
    const dayy = day.value;
    const yearr = year.value;
    const hour = hr.value;
    const minute = min.value;
    const second = sec.value;
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var myDate = new Date(`${months[mon-1]} ${dayy}, ${yearr} ${hour}:${minute}:${second}`);
    secs.value = myDate.getTime()/1000;
})
let intervalId;
intervalId = setInterval(()=>{
currentTime.textContent = Math.floor(new Date().getTime()/1000);
},1000);


currentTime.addEventListener('mouseout',()=>{
    intervalId = setInterval(()=>{
        currentTime.textContent = Math.floor(new Date().getTime()/1000);
        },1000);
})

currentTime.addEventListener('mouseover',()=>{
    clearInterval(intervalId);
})


