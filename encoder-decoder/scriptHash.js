
const sha1 = document.querySelector('#sha1');
const sha256 = document.querySelector('#sha256');
const sha512 = document.querySelector('#sha512');
const md5 = document.querySelector('#md5');
const result = document.querySelector('.result');
const input = document.querySelector('#sentence');

sha1.addEventListener('click', () => {
    result.textContent = CryptoJS.SHA1(input.textContent);
})
sha256.addEventListener('click', () => {
    result.textContent = CryptoJS.SHA256(input.textContent);
})
sha512.addEventListener('click', () => {
    result.textContent = CryptoJS.SHA512(input.textContent);
})
md5.addEventListener('click', () => {
    result.textContent = CryptoJS.MD5(input.textContent);
})


