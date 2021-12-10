const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const display = document.getElementById('display');
const seconds = document.getElementById('seconds');
const minutes = document.getElementById('minutes');
const hours = document.getElementById('hours');

let secondsId;

start.addEventListener('click', () => {
    start.disabled = true;
    secondsId = setInterval(() => {
        seconds.innerHTML = Number.parseInt(seconds.innerHTML) + 1;
        if (seconds.innerHTML === '60') {
            seconds.innerHTML = 0;
            minutes.innerHTML = Number.parseInt(minutes.innerHTML) + 1 + " : ";
            if (minutes.innerHTML === '60 : ') {
                minutes.innerHTML = 0 + " : ";
                hours.innerHTML = Number.parseInt(minutes.innerHTML) + 1 + " : ";
            }
        }
    }, 1000);
})

reset.addEventListener('click', function () {
    if (secondsId) {
        clearInterval(secondsId);
        start.disabled = false;
        seconds.innerHTML = '00';
        minutes.innerHTML = '00 : ';
        hours.innerHTML = '00 : ';
    }

})

stop.addEventListener('click', function () {
    if (secondsId) {
        start.disabled = false;
        clearInterval(secondsId);
    }
})






const getMinutes = () => {
    const minutesId = setInterval(() => {
        minutes.innerHTML = Number.parseInt(minutes) + 1;
    })
}