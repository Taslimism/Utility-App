const url = document.querySelector('#sentence');
const encoder = document.querySelector('#encoder');
const decoder = document.querySelector('#decoder');

const result = document.querySelector('.result');

encoder.addEventListener('click',()=>{
    result.textContent = encodeURIComponent(url.value);
    
})
decoder.addEventListener('click',()=>{
    result.textContent = decodeURIComponent(url.value);
    
})

