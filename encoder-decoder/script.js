const url = document.querySelector('#sentence');
const encoder = document.querySelector('#encoder');
const decoder = document.querySelector('#decoder');
const enc64 = document.querySelector('#encoder64');
const dec64 = document.querySelector('#decoder64');

const result = document.querySelector('.result');

encoder.addEventListener('click', () => {
    result.textContent = encodeURIComponent(url.value);

})
decoder.addEventListener('click', () => {
    result.textContent = decodeURIComponent(url.value);

})

enc64.addEventListener('click', () => {
    result.textContent = btoa(url.value);

})
dec64.addEventListener('click', () => {
    result.textContent = atob(url.value);

})

