
const sha1 = document.querySelector('#sha1');
const sha256 = document.querySelector('#sha256');
const sha512 = document.querySelector('#sha512');
const md5 = document.querySelector('#md5');
const enc64 = document.querySelector('#encoder64');
const dec64 = document.querySelector('#decoder64');
const result = document.querySelector('.result');
const input = document.querySelector('#sentence');

sha1.addEventListener('click',()=>{
    result.textContent = CryptoJS.SHA1(input.textContent);
})
sha256.addEventListener('click',()=>{
    result.textContent = CryptoJS.SHA256(input.textContent);
})
sha512.addEventListener('click',()=>{
    result.textContent = CryptoJS.SHA512(input.textContent);
})
md5.addEventListener('click',()=>{
    result.textContent = CryptoJS.MD5(input.textContent);
})

enc64.addEventListener('click',()=>{
    result.textContent = btoa(input.value);
    
})
dec64.addEventListener('click',()=>{
    result.textContent = atob(input.value);
    
})
